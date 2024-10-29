import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { httpClient } from "../../utils/config";
import { getJobsAction, Job } from "./jobReducer";

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
export const getDataJobAPI = (page: number, size: number) => {
  return async (dispatch: DispatchType) => {

    try {
      const res = await httpClient.get(
        `/api/v1/job?page=${page}&size=${size}&direction=desc`
      );
      const action: PayloadAction<Job> = getJobsAction(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    } 
  };
};

export const {setSearchAction, resetSearch} = searchReducer.actions;

export default searchReducer.reducer;

