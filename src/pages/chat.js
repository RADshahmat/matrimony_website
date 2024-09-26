import React, { useState } from "react";
import '../styles/chatUi.css';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChatUI = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

  const chats = [
    { id: 1, name: 'Chat 1', lastMessage: 'See you soon!', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Chat 2', lastMessage: 'How have you been?', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Chat 3', lastMessage: 'Let\'s catch up!', avatar: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Chat 4', lastMessage: 'Are you there?', avatar: 'https://via.placeholder.com/40' },
  ];

  const messages = [
    { id: 1, text: 'Hello!', sender: 'user', avatar: 'https://via.placeholder.com/40' },
    { id: 2, text: 'Hi, how are you?', sender: 'bot', avatar: 'https://via.placeholder.com/40' },
    { id: 3, text: 'What can I do for you?', sender: 'bot', avatar: 'https://via.placeholder.com/40' },
  ];

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
    setShowSidebar(false); // Hide sidebar when chat is selected
  };

  const handleBackButtonClick = () => {
    setSelectedChat(null);
    setShowSidebar(true); // Show sidebar when going back
  };

  return (
    <div className="messenger-container">
      <div className={`chat-sidebar ${showSidebar ? '' : 'show'}`}>
       <div style={{display:'flex',alignItems:'end'}}><Link to={`/userDashboard`}><FaArrowLeft/></Link><h3 style={{marginBottom:'0',width:'85%'}}>Chats</h3></div> 
        <ul>
          {chats.map((chat) => (
            <li key={chat.id} onClick={() => handleChatClick(chat)} className={selectedChat && selectedChat.id === chat.id ? 'active' : ''}>
              <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar" />
              <div className="chat-info">
                <span className="chat-name">{chat.name}</span><br/>
                <span className="chat-last-message">{chat.lastMessage}</span>
              </div>
              {selectedChat && selectedChat.id === chat.id && <span className="active-indicator"></span>}
            </li>
          ))}
        </ul>
      </div>

      <div className={`chat-window ${selectedChat ? 'show' : ''}`}>
        {selectedChat ? (
          <>
            <div className="chat-header">
              <h3>{selectedChat.name}</h3>
              <button className="back-button" onClick={handleBackButtonClick}>
                &#8592; {/* Back arrow */}
              </button>
            </div>
            <div className="chat-body">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <img src={message.avatar} alt={`${message.sender} avatar`} className="message-avatar" />
                  <div className="message-text">{message.text}</div>
                </div>
              ))}
            </div>
            <div className="chat-footer">
              <input type="text" placeholder="Type a message..." />
              <button>Send</button>
            </div>
          </>
        ) : (
          <div className="chat-placeholder">Select a chat to start messaging.</div>
        )}
      </div>
    </div>
  );
};

export default ChatUI;
