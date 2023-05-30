import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../client";

// interface TIntialState {
//   incomplete_results: boolean;
//   items: [];
//   total_count: number;
// }

export const fetchUsers = createAsyncThunk(
  "posts/fetchUsers",
  async (query = "react") => {
    console.log("eto query", query);
    const response = await client.get(
      `https://api.github.com/search/repositories?q=${query}`
    );
    if (response) {
      return response.data;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    status: "idle",
    items: [],
  },

  reducers: {
    userCommentUpdated(state, action) {
      const { id, comment } = action.payload;
      //console.log(state.items, "eto state");
      const existingUser = state.items.find((user) => user.id === id);
      if (existingUser) {
        existingUser.comment = comment;
        console.log(existingUser, "eto existingUser");
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return { status: "succeeded", ...action.payload };
      });
    // .addCase(fetchUsers.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // });
  },
});

export default usersSlice.reducer;

export const { userCommentUpdated } = usersSlice.actions;

export const selectAllUsers = (state) => {
  return state.users.items.map((user) => ({
    id: user.id,
    stars: user.stargazers_count,
    views: user.watchers,
    project: user.name,
    author: user.owner.login,
    avatar: user.owner.avatar_url,
  }));
};
