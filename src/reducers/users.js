import * as types from "../constants/ActionTypes";

const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, { id: action.id, name: action.name }];

    case types.USERS_LIST:
      return action.user;

    default:
      return state;
  }
};

export default users;
