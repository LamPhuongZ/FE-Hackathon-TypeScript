import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  keyword: string;
  location: string;
  jobTypeId: number | null;
}

const initialState: SearchState = {
  keyword: "",
  location: "all",
  jobTypeId: null,
};

const searchReducer = createSlice({
  name: "searchReducer",
  initialState,
  reducers: {
    setSearchAction: (
      state: SearchState,
      action: PayloadAction<SearchState>
    ) => {
      state.keyword = action.payload.keyword;
      state.location = action.payload.location;
      state.jobTypeId = action.payload.jobTypeId;
    },
    resetSearch: (state: SearchState) => {
      state.keyword = "";
      state.location = "all";
      state.jobTypeId = null;
    },
  },
});

export const {setSearchAction, resetSearch} = searchReducer.actions;

export default searchReducer.reducer;
