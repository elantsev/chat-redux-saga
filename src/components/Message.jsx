import React from "react";
import PropTypes from "prop-types";

const Message = ({ author, message }) => (
  <p>
    <i>{author}</i>: {message}
  </p>
);

export default Message;

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
