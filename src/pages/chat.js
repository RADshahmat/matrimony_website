import React, { useState, useEffect, useCallback } from "react";
import "../styles/chatUi.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import io from "socket.io-client";
import axiosInstance from "../Axios/axios_instance";
import ReportModal from "./report";
import { toast,ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const Chat = () => {
  const location = useLocation();
  const [selectedChat, setSelectedChat] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userId, setUserId] = useState(location.state.userId.toString());
  const [isTyping, setIsTyping] = useState(false);
  const [offset, setOffset] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [mySocketId, setMySocketId] = useState("");
  const [selectedPeerSocketId, setSelectedPeerSocketId] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [peerId, setPeerId] = useState("");
  const [socket, setSocket] = useState(null);
  const [lastMessage, setLastMessage] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  useEffect(() => {
    const newSocket = io("https://backend.butterfly.hurairaconsultancy.com", {
      withCredentials: true,
    });
    setSocket(newSocket);

    newSocket.on("registerSocket", (data) => {
      setMySocketId(data.socketId);
    });

    newSocket.on("activeUsers", (activeUserIds) => {
      setActiveUsers(activeUserIds);
    });
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [typingTimeout]);
  useEffect(() => {
    if (socket && userId) {
      socket.emit("registerUserId", { userId });
    }
  }, [socket, userId]);

  useEffect(() => {
    axiosInstance
      .get(`/chats?socId=${mySocketId}`)
      .then((response) => {
        setChats(response.data);
        setLastMessage(() => {
          const newLastMessages = response.data.map((chat) => ({
            id: chat.id,
            lastMessage: chat.lastMessage,
          }));
          return newLastMessages;
        });
      })
      .catch((error) => console.error("Error fetching chats:", error));



      if (socket) {
        socket.on("newMessage", (messageData) => {
          console.log(messageData, selectedChat, "bal ki hoise");
          if (selectedChat && selectedChat.peerId) {
            if (messageData && messageData.userId === selectedChat.peerId) {
              setMessages((prevMessages) => [...prevMessages, messageData]);
            }
            
            setLastMessage(messageData.message);
            setTimeout(() => scrollToBottom(), 10);
          } else {
            console.warn("selectedChat is null or missing peerId");
          }
        });
      
        return () => socket.off("newMessage");
      }
      
  }, [selectedChat, socket]);

  useEffect(() => {
    if (selectedChat && socket) {
      socket.on("peerTyping", (data) => {
        console.log("Peer is typing:", data);
        if (data?.data?.userId === selectedChat.peerId) {
          setIsTyping(data.isTyping);
        }
      });
      return () => {
        socket.off("peerTyping");
      };
    }
  }, [selectedChat, socket]);


  const handleChatClick = async (chat) => {
    setSelectedChat(chat);
    setShowSidebar(false);

    try {
      const response = await axiosInstance.get(
        `/messages/${chat.peerId}?limit=20&offset=0`
      );
      setMessages(response.data.messages);
      setPeerId(chat.peerId);
      setOffset(20);
      setHasMore(true);
      setSelectedPeerSocketId(chat.peerSocketId);
      setTimeout(() => scrollToBottom(), 0);
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
      userId: userId,
      peerId: selectedChat.peerId,
      message: newMessage,
      peerSocketId: selectedPeerSocketId,
    };

    axiosInstance
      .post("/messages", messageData)
      .then(() => {
        socket.emit("newMessage", messageData, userId);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender_id: userId,
            message: newMessage,
            avatar: "https://via.placeholder.com/40",
          },
        ]);
        setTimeout(() => scrollToBottom(), 0);
        setNewMessage("");
      })
      .catch((error) => {console.error("Error sending message:", error);
        toast.error('Do not send contact info')
      });
  };

  const handleTyping = () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    socket.emit("typing", { peerId: selectedChat.peerId, userId: userId });
  };

  const handleStopTyping = () => {
    const timeout = setTimeout(() => {
      socket.emit("stopTyping", { peerId: selectedChat.peerId, userId: userId });
    }, 1000);

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

  console.log(activeUsers, selectedChat, "theese are active users");

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
          {chats.map((chat, index) => (
            <li
              key={chat.id}
              onClick={() => handleChatClick(chat)}
              className={
                activeUsers.includes(chat.peerId) ? "active" : ""
              }
            >
              <img
                src={
                  chat.image0?.[0]?.path
                    ? `https://backend.butterfly.hurairaconsultancy.com/${chat.image[0].path}`
                    : "https://via.placeholder.com/40" 
                }
                alt={`${chat.name} avatar`}
                className="chat-avatar"
              />

              <div className="chat-info">
                <span className="chat-name">{chat.name}{activeUsers.includes(chat.peerId) && <span className="active-indicator"></span>}</span>
                <br />
                <span className="chat-last-message">{lastMessage[index].lastMessage}</span>
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
              <span><button className="back-button" onClick={handleBackButtonClick}>
                  &#8592;
                </button></span>
                {selectedChat.name}
                {activeUsers.includes(peerId) && (
                  <span className="active-indicator"></span>

                )}
                
              </h3>
              <button className="back-button" onClick={openModal}>
              &#8942;
              </button>
            </div>
            <div className="chat-body">
              {loading && <div className="loading-spinner">Loading...</div>}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${userId === message.sender_id ? "user" : "bot"
                    }`}
                >
                  <img
                    src={
                      userId === message.sender_id
                        ? selectedChat.image0?.[0]?.path
                          ? `https://backend.butterfly.hurairaconsultancy.com/${selectedChat.image0[0].path}`
                          : "https://via.placeholder.com/40" 
                        : selectedChat.image?.[0]?.path
                          ? `https://backend.butterfly.hurairaconsultancy.com/${selectedChat.image[0].path}`
                          : "https://via.placeholder.com/40" 
                    }
                    alt={`${message.user} avatar`}
                    className="message-avatar"
                  />

                  <p className="message-text">{message.message}</p>
                </div>
              ))}

              {isTyping && (
                <div className={`message ${false ? "user" : "bot"}`}>
                  <img
                    src={
                      selectedChat.image?.[0]?.path
                        ? `https://backend.butterfly.hurairaconsultancy.com/${selectedChat.image[0].path}`
                        : "https://via.placeholder.com/40" 
                    }
                    alt="avatar"
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
      <ReportModal isOpen={isModalOpen} onClose={closeModal} peerId={selectedChat?selectedChat.peerId:''} matchId={selectedChat?selectedChat.id:''} />
    <ToastContainer/>
    </div>
  );
};

export default Chat;
