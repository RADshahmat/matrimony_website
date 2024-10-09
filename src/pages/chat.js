import React, { useState, useEffect, useCallback } from "react";
import "../styles/chatUi.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import axiosInstance from "../Axios/axios_instance";


const socket = io("", {
  withCredentials: true,
});

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [offset, setOffset] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [mySocketId, setMySocketId] = useState("");
  const [selectedPeerSocketId, setSelectedPeerSocketId] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [peerId,setPeerId]=useState('');

  useEffect(() => {
    console.log('ballu')
    if (socket) {
      console.log('ballu1')
      socket.on("connect", () => {
        console.log("Socket connected with ID:", socket.id);
        socket.on("activeUsers", (activeUserIds) => {
          console.log("Active Users received:", activeUserIds);
          setActiveUsers(activeUserIds);
        });

        socket.on("registerSocket", (data) => {
          console.log("Socket registered:", data);
          setMySocketId(data.socketId);
        });
      });
    }
    return () => {
      if (socket) {
        socket.off("connect");
        socket.off("activeUsers");
        socket.off("registerSocket");
      }
    };
  }, []);
  useEffect(() => {
    scrollToBottom(); 
  }, [isTyping]);
 
  useEffect(() => {
    if (userId) {
      console.log("Emitting registerUserId for:", userId);
      socket.emit("registerUserId", { userId: userId });
    }
  }, [userId]);

  // Fetch chats and handle new messages
  useEffect(() => {
    axiosInstance
      .get(`/chats?socId=${socket.id}`)
      .then((response) => {
        setChats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chats:", error);
      });

    socket.on("newMessage", (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
      setTimeout(() => {
        scrollToBottom();
      }, 0);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [selectedChat]);

  useEffect(() => {
    if (selectedChat) {
      socket.on("peerTyping", (data) => {
        console.log("Peer is typing:", data.isTyping);
        setIsTyping(data.isTyping);
      });
    }

    return () => {
      socket.off("peerTyping");
    };
  }, [selectedChat]);

  const handleChatClick = async (chat) => {
    setSelectedChat(chat);
    setShowSidebar(false);
    console.log('chat dekhi',chat)

    try {
      const response = await axiosInstance.get(
        `/messages/${chat.peerId}?limit=20&offset=0`
      );
      setMessages(response.data.messages);
      setUserId(response.data.userId);
      setPeerId(chat.peerId);
      setOffset(20);
      setHasMore(true);
      setSelectedPeerSocketId(chat.peerSocketId);
      setTimeout(() => {
        scrollToBottom();
      }, 0);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  const handleBackButtonClick = () => {
    setSelectedChat(null);
    setShowSidebar(true);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const messageData = {
      peerId: selectedChat.peerId,
      message: newMessage,
      peerSocketId: selectedPeerSocketId,
    };

    axiosInstance
      .post("/messages", messageData)
      .then(() => {
        socket.emit("newMessage", messageData);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender_id: userId,
            message: newMessage,
            avatar: "https://via.placeholder.com/40",
          },
        ]);
        setTimeout(() => {
          scrollToBottom();
        }, 0);
        setNewMessage("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  const handleTyping = () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    socket.emit("typing", { peerId: selectedChat.peerId });
  };

  const handleStopTyping = () => {
    const timeout = setTimeout(() => {
      socket.emit("stopTyping", { peerId: selectedChat.peerId });
    }, 2000);

    setTypingTimeout(timeout);
  };

  const scrollToBottom = () => {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight + 10;
    }
  };

  const fetchMoreMessages = async () => {
    if (loading || !selectedChat) return;
    setLoading(true);

    try {
      const chatBody = document.querySelector(".chat-body");
      const prevScrollHeight = chatBody.scrollHeight;
      const response = await axiosInstance.get(
        `/messages/${selectedChat.peerId}?limit=20&offset=${offset}`
      );
      const newMessages = response.data.messages;

      if (newMessages.length > 0) {
        setMessages((prevMessages) => [...newMessages, ...prevMessages]);
        setOffset(offset + 20);
        setTimeout(() => {
          chatBody.scrollTop = chatBody.scrollHeight - prevScrollHeight;
        }, 0);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching more messages:", err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedScroll = useCallback(
    debounce(() => {
      const chatBody = document.querySelector(".chat-body");
      if (chatBody && chatBody.scrollTop <= 200 && hasMore && !loading) {
        fetchMoreMessages();
      }
    }, 300),
    [hasMore, loading, selectedChat]
  );

  useEffect(() => {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) {
      chatBody.addEventListener("scroll", debouncedScroll);
    }
    return () => {
      if (chatBody) {
        chatBody.removeEventListener("scroll", debouncedScroll);
      }
    };
  }, [hasMore, loading, debouncedScroll, selectedChat]);

  console.log(activeUsers,"theese are active users")

  return (
    <div className="messenger-container">
      <div className={`chat-sidebar ${showSidebar ? "" : "show"}`}>
        <div style={{ display: "flex", alignItems: "end" }}>
          <Link to={`/userDashboard`}>
            <FaArrowLeft />
          </Link>
          <h3 style={{ marginBottom: "0", width: "85%" }}>Chats</h3>
        </div>
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => handleChatClick(chat)}
              className={
                selectedChat && selectedChat.id === chat.id ? "active" : ""
              }
            >
              <img
                src={`https://backend.butterfly.hurairaconsultancy.com/${chat.image[0].path}` || "https://via.placeholder.com/40"}
                alt={`${chat.name} avatar`}
                className="chat-avatar"
              />
              <div className="chat-info">
                <span className="chat-name">{chat.name}</span>
                <br />
                <span className="chat-last-message">{chat.lastMessage}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={`chat-window ${selectedChat ? "show" : ""}`}>
        {selectedChat ? (
          <>
            <div className="chat-header">
              <h3>
                {selectedChat.name}
                {activeUsers.includes(peerId) && (
                  <span className="active-indicator"></span>
                )}
              </h3>
              <button className="back-button" onClick={handleBackButtonClick}>
                &#8592;
              </button>
            </div>
            <div className="chat-body">
              {loading && <div className="loading-spinner">Loading...</div>}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${
                    userId === message.sender_id ? "user" : "bot"
                  }`}
                >
                  <img
                    src={ userId === message.sender_id ?`https://backend.butterfly.hurairaconsultancy.com/${selectedChat.image0[0].path}`:`https://backend.butterfly.hurairaconsultancy.com/${selectedChat.image[0].path}` || "https://via.placeholder.com/40"}
                    alt={`${message.user} avatar`}
                    className="message-avatar"
                  />
                  <p className="message-text">{message.message}</p>
                </div>
              ))}

              {isTyping && (
                  <div
                  className={`message ${
                    false ? "user" : "bot"
                  }`}
                  
                >
                  <img
                    src={`https://backend.butterfly.hurairaconsultancy.com/${selectedChat.image[0].path}` || "https://via.placeholder.com/40"}
                    alt={`avatar`}
                    className="message-avatar"
                  />
                  <p className="message-text">Typing...</p>
                </div>
              )}
            </div>
            <div className="chat-footer">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  } else {
                    handleTyping();
                  }
                }}
                onKeyUp={handleStopTyping}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div className="chat-placeholder">
            Select a chat to start messaging.
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
