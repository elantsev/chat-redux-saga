import * as types from "../constants/ActionTypes";

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
});

export const messageReceiver = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});

export const populateUsersList = user => ({
  type: types.USERS_LIST,
  user
});
