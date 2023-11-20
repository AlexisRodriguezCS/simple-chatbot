/*
  Chatbox Component:
  This component renders a chatbox container with messages, distinguishing between user and bot messages.

  Props:
  - messages: An array containing message objects with "text" and "user" properties.

  Usage:
  The component is typically used within a Chatbot component to display the conversation.
*/

import React from "react";

// Define the Chatbox functional component
const Chatbox = ({ messages }) => {
  // Render the chatbox container with messages
  return (
    <div className="chatbox-container">
      {/* Map through messages and render each message */}
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.user === "user" ? "user" : "bot"}`}
        >
          {/* Display the message text */}
          {message.text}
        </div>
      ))}
    </div>
  );
};

// Export the Chatbox component as the default export
export default Chatbox;
