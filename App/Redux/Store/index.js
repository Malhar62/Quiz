import { createStore } from "redux";
import reducer from "../Reducers/index";

export const store = createStore(reducer);
