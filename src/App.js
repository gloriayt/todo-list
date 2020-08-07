import React, { useState } from "react";
import "./App.css";
import TodoApp from "./TodoApp"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>To Do:</h1>
      </div>
      <TodoApp />
    </div>
  );
}

export default App;
