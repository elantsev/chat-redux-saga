import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Sidebar />
      <section>
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}

export default App;
