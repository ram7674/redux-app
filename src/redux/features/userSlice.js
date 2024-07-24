import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    users: [],
    errorMessage: null
};

export const getUser = createAsyncThunk('user/getdata', async () => {
    const response = await axios.get('https://jsonplaceholder.org/users');
    return response.data;
});

const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = "Oops! Something Went Wrong";
            });
    }
});

export default userSlice.reducer;
