import { ADD_MESSAGE, MESSAGE_RECEIVED } from "../constants/ActionTypes";

function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return [
        ...state,
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ];

    default:
      return state;
  }
}

export default messages;
