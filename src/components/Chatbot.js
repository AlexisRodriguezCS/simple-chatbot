/*
  Chatbot Component:
  This component represents a simple chatbot with predefined responses.
  Users can interact with the chatbot by typing messages and pressing "Enter" or clicking the "Send" button.

  Functions:
  - handleSendMessage: Handles sending a user message to the chatbox.
  - handleKeyDown: Listens for "Enter" key press to send a message.
  - getBotResponse: Generates a bot response based on user input.

  State:
  - messages: An array containing the chat messages.
  - inputText: The current text input value.

  Usage:
  The component is rendered within a container with the class "chatbot-container".
  It includes a chatbox to display messages and an input field for users to type messages.
*/

import React, { useState } from "react";
import Chatbox from "./Chatbox";

const Chatbot = () => {
  // State for managing chat messages and user input
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  // Function to handle sending a user message
  const handleSendMessage = () => {
    // Check if the input is not empty
    if (inputText.trim() === "") return;

    // Create a user message object
    const userMessage = { text: inputText, user: "user" };

    // Get a bot response based on user input
    const botResponse = getBotResponse(inputText);

    // Update the messages state with the user message and bot response
    const newMessages = [...messages, userMessage, botResponse];
    setMessages(newMessages);

    // Clear the input field
    setInputText("");
  };

  // Function to handle "Enter" key press for sending messages
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Function to get a bot response based on user input
  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    switch (lowerInput) {
      case "hello":
        return { text: "Hi there! How can I help you?", user: "bot" };
      case "how are you?":
        return {
          text: "I'm just a computer program, but thanks for asking!",
          user: "bot",
        };
      default:
        return {
          text: "I'm not sure how to respond to that. Ask me something else!",
          user: "bot",
        };
    }
  };

  // Render the chatbot component
  return (
    <div className="chatbot-container">
      {/* Render the Chatbox component to display messages */}
      <Chatbox messages={messages} />

      {/* Input container with text input and send button */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
