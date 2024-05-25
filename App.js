// Import necessary libraries and components
import React from "react";
import CurrentLocation from "./currentLocation"; // Assuming this component handles current location weather display
import "./App.css"; // Importing CSS styles for the App component

// Define the App functional component
function App() {
  // Return JSX representing the structure of the UI
  return (
    <React.Fragment>
      {/* Container div to hold the main content */}
      <div className="container">
        {/* Render the CurrentLocation component */}
        <CurrentLocation />
      </div>
      {/* Footer section with additional information and links */}
      
    </React.Fragment>
  );
}

// Export the App component as the default export
export default App;
