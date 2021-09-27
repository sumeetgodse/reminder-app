import { createSlice } from "@reduxjs/toolkit";
import { getUsers, setUsers } from "../utilities/localStorage";

const userSlice = createSlice({
    name: "users",
    initialState: getUsers("users"),
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
            setUsers("users",JSON.stringify(state))
        }
    }
})

export const { addUser } = userSlice.actions;

export const userReducer = userSlice.reducer;