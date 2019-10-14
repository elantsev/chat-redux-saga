import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../actions/actions";

const AddMessage = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  return (
    <section id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === "Enter") {
            dispatch(addMessage(message, "Me"));
            setMessage("");
          }
        }}
        onChange={e => setMessage(e.target.value)}
        type="text"
        value={message}
      />
    </section>
  );
};

export default AddMessage;
