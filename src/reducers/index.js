import { combineReducers } from "redux";
import messages from "./messages";
import users from "./messages";

export const chat = combineReducers({ messages, users });
