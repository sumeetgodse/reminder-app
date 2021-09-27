import { createSlice } from "@reduxjs/toolkit";
import { getRemindersLocal, setRemindersLocal } from "../utilities/localStorage";

const reminderSlice = createSlice({
    name: "reminders",
    initialState: getRemindersLocal("reminders"),
    reducers: {
        addReminder: (state, action) => {
            state.push(action.payload);
            setRemindersLocal("reminders", JSON.stringify(state));
        },
        deleteReminder: (state, action) => {
            for(let i=0; i<state.length; i++) {
                if(state[i].username == action.payload.username && state[i].text == action.payload.text) {
                    state.splice(i, 1);
                    break;
                }
            }
            setRemindersLocal("reminders", JSON.stringify(state));
        }
    }
})

export const { addReminder, deleteReminder } = reminderSlice.actions;

export const reminderReducer = reminderSlice.reducer;