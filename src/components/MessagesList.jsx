import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

const MessageList = () => {
  const messages = useSelector(state => state.messages);

  return (
    <section id="message-list">
      <ul>
        {messages.map(message => (
          <Message key={message.id} {...message} />
        ))}
      </ul>
    </section>
  );
};

export default MessageList;
