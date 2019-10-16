import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddMessage from "./components/AddMessages";
import MessagesList from "./components/MessagesList";

function App() {
  return (
    <div id="container">
      {/* <Sidebar /> */}
      <section>
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}

export default App;
