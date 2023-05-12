import { createSlice } from "@reduxjs/toolkit";
import { USER } from "../../utilities/constants";
import { UserState } from "./types";
import { SLICE_NAME } from "../../utilities/enums";
import { loginUser, registerUser } from "./action";
import { fetchCurrentUser } from "./action";

export const initialState: UserState = {
    isFetching: false,
    user: null,
    token: localStorage.getItem(USER)
}

export const userSlice = createSlice({
    name: SLICE_NAME.USERS,
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Login
        builder.addCase(loginUser.pending, (state, _) => {
            state.isFetching = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isFetching = false;
            state.user = action.payload,
                localStorage.setItem(USER, JSON.stringify(action.payload));
        });
        builder.addCase(loginUser.rejected, (state, _) => {
            state.isFetching = false;
        });

        // Register
        builder.addCase(registerUser.pending, (state, _) => {
            state.isFetching = true;
        });
        builder.addCase(registerUser.fulfilled, (state, _) => {
            state.isFetching = false;
        });
        builder.addCase(registerUser.rejected, (state, _) => {
            state.isFetching = false;
        });

        // Fetch current user
        builder.addCase(fetchCurrentUser.pending, (state, _) => {
            state.isFetching = true;
        });
        builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.isFetching = false;
            state.user = action.payload,
                localStorage.setItem(USER, JSON.stringify(action.payload));
        });
        builder.addCase(fetchCurrentUser.rejected, (state, _) => {
            state.isFetching = false;
        });
    }
});

export const userReducer = userSlice.reducer