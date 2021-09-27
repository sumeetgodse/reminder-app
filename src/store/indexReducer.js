import { createSlice } from "@reduxjs/toolkit";
import { getIndex, setIndex } from "../utilities/localStorage";

const indexSlice = createSlice({
    name: "index",
    initialState: getIndex("index"),
    reducers: {
        changeLoggedIndex: (state, action) => {
            state[0] = action.payload;
            setIndex("index",JSON.stringify(state))
        }
    }
})

export const { changeLoggedIndex } = indexSlice.actions;

export const indexReducer = indexSlice.reducer;