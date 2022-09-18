import { configureStore } from "@reduxjs/toolkit";
import event from "./features/event";

const store = configureStore({ reducer: event });

export default store;
