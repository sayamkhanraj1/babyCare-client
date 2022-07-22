import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get(
    "https://calm-mountain-67432.herokuapp.com/posts"
  );
  return res.data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action)=>{
      state.posts = action.payload
    })
  },
});

export default postSlice.reducer;