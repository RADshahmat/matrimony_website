import React, { useState, useEffect, useRef } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MainContainer,
} from "@chatscope/chat-ui-kit-react";

function SupportChat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { content: "Welcome! How can we help you?", sender: "support" },
  ]);
  const chatRef = useRef(null); // Reference for the chat window

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleSendMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { content: text, sender: "user" },
      { content: "Thanks! We’ll get back to you soon.", sender: "support" },
    ]);
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "auto";
  };

  const handleWheel = (e) => {
    // Check if the mouse is over the chat window and if it's scrollable
    if (chatRef.current && chatRef.current.contains(e.target)) {
      const chatElement = chatRef.current;
      const atTop = chatElement.scrollTop === 0;
      const atBottom = chatElement.scrollHeight - chatElement.scrollTop === chatElement.clientHeight;

      // If at the top and scrolling up or at the bottom and scrolling down, allow body scroll
      if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
        enableBodyScroll();
      } else {
        disableBodyScroll();
      }
    }
  };

  useEffect(() => {
    // Attach the wheel event listener
    window.addEventListener("wheel", handleWheel, { passive: false });
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
      enableBodyScroll(); // Ensure body scroll is re-enabled on unmount
    };
  }, []);

  return (
    <div>
      {/* Support Button */}
      <div
        onClick={handleToggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        💬
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div
          ref={chatRef}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            height: "400px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflowY: "auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <MainContainer>
            <ChatContainer>
              <MessageList>
                {messages.map((msg, index) => (
                  <Message
                    key={index}
                    model={{
                      message: msg.content,
                      sentTime: "just now",
                      sender: msg.sender,
                      direction: msg.sender === "user" ? "outgoing" : "incoming",
                    }}
                  />
                ))}
              </MessageList>
              <MessageInput
                placeholder="Type your message here..."
                onSend={handleSendMessage}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      )}
    </div>
  );
}

export default SupportChat;
