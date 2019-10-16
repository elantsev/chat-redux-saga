import React from "react";
import "./App.css";
import AddMessage from "./components/AddMessages";
import MessagesList from "./components/MessagesList";
import Users from "./components/Users";

function App() {
  return (
    <div id="container">
      <Users />
      <section>
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}

export default App;
