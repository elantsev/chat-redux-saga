import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";

export const chat = combineReducers({ messages, users });
