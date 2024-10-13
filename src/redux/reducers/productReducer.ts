import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { get } from "react-hook-form";

export interface Job {
  jobId: number;
  title: string;
  address: string;
  phone: string;
  contactPerson: string;
  startDate: Date;
  endDate: null;
  duration: number;
  jobType: JobType;
  images: Image[];
  description: string;
  postedDate: null;
  verified: boolean;
}

export interface JobState {
  arrJob: Job[];
}

const initialState: JobState = {
  arrJob: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getJobsAction: (state: JobState, action: PayloadAction<Job[]>) => {
      state.arrJob = action.payload;
    },
  },
});

export const {} = productReducer.actions;

export default productReducer.reducer;
