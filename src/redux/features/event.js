import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  event: [],
  error: null,
  loadingFetch: false,
};

export const fetchEvents = createAsyncThunk(
  "fetch/events",
  async (_, thunkAPI) => {
    try {
      const date = await fetch("https://beta.sosportom.ru/graphql/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          query:
            "query videostandEvents ($videostand_id: ID!) { videostandEvents(videostand_id: $videostand_id) { current_and_upcoming { title, is_main, dt_start, dt_end, dt_create }, finished { title, is_main, dt_start, dt_end, dt_create } } }",
          variables: { videostand_id: "6" },
        }),
      });
      const res = await date.json();
      return thunkAPI.fulfillWithValue(
        res.data.videostandEvents.current_and_upcoming
      );
    } catch (err) {
      return thunkAPI.rejectWithValue(err.toString());
    }
  }
);
const eventSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.loadingFetch = false;
      state.error = null;
      state.event = action.payload;
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loadingFetch = false;
      state.error = action.payload;
    });
    builder.addCase(fetchEvents.pending, (state) => {
      state.loadingFetch = true;
      state.error = null;
    });
  },
});
export default eventSlice;
