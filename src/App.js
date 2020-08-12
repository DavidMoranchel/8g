import React from "react";
import "./App.css";

// Screens
import BlogNotes from "./screens/NotesBlog";
import CurrencyConverter from "./screens/CurrencyConverter";

function App() {
  return (
    <div className="App">
      <BlogNotes />
      <CurrencyConverter />
    </div>
  );
}

export default App;
