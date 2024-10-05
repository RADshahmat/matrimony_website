import React, { useState, useEffect, useCallback } from "react";
import "../styles/chatUi.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import axiosInstance from "../Axios/axios_instance";



function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const Chat = () => {
  const socket = io('http://localhost:3004', {
    withCredentials: true,
  });
  
  
  setTimeout(() => {
    console.log("Socket connected:", socket.connected); // This should now return true if connected
  }, 1000);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userId, setuserId] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [offset, setOffset] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [mySocketId, setMySocketId] = useState("");
  const [selectedPeerSocketId, setSelectedPeerSocketId] = useState(""); // Declare state here

  useEffect(() => {
    socket.on("registerSocket", (data) => {
      console.log("Received socket registration:", data); // Add logging here
      setMySocketId(data.socketId); // Store your own socket ID
    });
  
    return () => {
      socket.off("registerSocket");
    };
  }, []);
  useEffect(() => {
    if (userId) {
      socket.emit("registerUserId", { userId: userId });
      // Emit the userId to the socket server
    }
  }, [userId]);
  
  

  useEffect(() => {
    console.log(socket.id,'dekhi ki ase')
    axiosInstance
      .get(`/chats?socId=${socket.id}`)
      .then((response) => {
        setChats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chats:", error);
      });
    socket.on("newMessage", (messageData) => {
      console.log("message Data", messageData);
  
        setMessages((prevMessages) => [ ...prevMessages,messageData]);
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
      //socket.off("peerTyping");
    };
  }, [selectedChat]);

  const handleChatClick = async (chat) => {
    setSelectedChat(chat);
    setShowSidebar(false);
  
    try {
      const response = await axiosInstance.get(
        `/messages/${chat.peerId}?limit=20&offset=0`
      );
      setMessages(response.data.messages);
      setuserId(response.data.userId);
      setOffset(20);
      setHasMore(true);
  
      // Store peer's socket ID
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
      peerSocketId: selectedPeerSocketId, // Send the peer's socket ID with the message
    };
    
    axiosInstance
      .post("/messages", messageData)
      .then(() => {
        socket.emit("newMessage", messageData); // Emit the message with the peer's socket ID
  
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
    socket.emit("typing", { peerId: selectedChat.peerId });
  };

  const handleStopTyping = () => {
    socket.emit("stopTyping", { peerId: selectedChat.peerId });
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
        setMessages((prevMessages) => [...newMessages, ...prevMessages]); // Append older messages at the top
        setOffset(offset + 20);

        // Adjust the scroll position to keep the user in the same spot
        setTimeout(() => {
          chatBody.scrollTop = chatBody.scrollHeight - prevScrollHeight;
        }, 0); // Ensures that scroll happens after DOM update
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching more messages:", err);
    } finally {
      setLoading(false);
    }
  };

  // Debounced scroll handler
  const debouncedScroll = useCallback(
    debounce(() => {
      const chatBody = document.querySelector(".chat-body");
      if (chatBody) {
        if (chatBody.scrollTop <= 200 && hasMore && !loading) {
          // Scroll near the top (adjust value as needed)
          fetchMoreMessages();
        }
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

  console.log(socket.id,'dekhi ki ase2')

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
                src={chat.avatar || "https://via.placeholder.com/40"}
                alt={`${chat.name} avatar`}
                className="chat-avatar"
              />
              <div className="chat-info">
                <span className="chat-name">{chat.name}</span>
                <br />
                <span className="chat-last-message">{chat.lastMessage}</span>
              </div>
              {selectedChat && selectedChat.id === chat.id && (
                <span className="active-indicator"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={`chat-window ${selectedChat ? "show" : ""}`}>
        {selectedChat ? (
          <>
            <div className="chat-header">
              <h3>{selectedChat.name}</h3>
              <button className="back-button" onClick={handleBackButtonClick}>
                &#8592; {/* Back arrow */}
              </button>
            </div>
            <div className="chat-body">
              {loading && <div className="loading-spinner">Loading...</div>}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${
                    userId == message.sender_id ? "user" : "bot"
                  }`}
                >
                  <img
                    src={message.avatar || "https://via.placeholder.com/40"}
                    alt={`${message.user} avatar`}
                    className="message-avatar"
                  />
                  <p className="message-text">{message.message}</p>
                </div>
              ))}

              {isTyping && <p style={{marginTop:'-15px',textAlign:'left'}}>typing...</p>}
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
