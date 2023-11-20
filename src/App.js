/*
  App Component:
  This component represents the main application, rendering a simple chatbot.

  Structure:
  - It includes a container with a title and the Chatbot component.


  Note: 
  - The Chatbot component is imported from the "./components/Chatbot" file.
  - The styling is imported from the "./App.css" file.
*/

// Import React
import React from "react";

// Import the Chatbot component
import Chatbot from "./components/Chatbot";

// Import the styling for the App component
import "./App.css";

// Define the App functional component
const App = () => {
  // Render the main application structure
  return (
    <div className="app-container">
      {/* Render the title */}
      <h1 className="chatbot-title">Simple Chatbot</h1>

      {/* Render the Chatbot component */}
      <Chatbot />
    </div>
  );
};

// Export the App component as the default export
export default App;
