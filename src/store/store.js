import { configureStore } from "@reduxjs/toolkit";
import { indexReducer } from "./indexReducer";
import { reminderReducer } from "./reminderReducer";
import { userReducer } from "./userReducer";

export const store = configureStore({
    reducer: {
        reminderReducer: reminderReducer,
        userReducer: userReducer,
        indexReducer: indexReducer
    }
})