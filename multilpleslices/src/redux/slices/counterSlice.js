import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("feth all movies", async () => {
  const res = await fetch(
    "https://www.omdbapi.com/?apikey=144e0763&s=Harry%20Potter&page=2"
  );

  return res.json();
});

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    movies: [],
  },
  reducers: {
    increaseReducer: (state, action) => {
      state.count += 1;
    },
    decreaseReducer: (state, action) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      console.log("Promise is pending");
    }),
      builder.addCase(fetchMovies.fulfilled, (state, action) => {
        console.log("Promise is fullfilled");
        state.movies = action.payload.Search;
      });
  },
});

export default counterSlice.reducer;
export const { increaseReducer, decreaseReducer } = counterSlice.actions;
