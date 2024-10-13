import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import axios from "axios";

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

export interface Image {
  url: string;
  cloudiaryPuclicUrl: string;
  typeOfImg: string;
}

export interface JobType {
  id: number;
  name: string;
  description: string;
  minPrice: number;
  maxPrice: number;
}

export interface JobState {
  arrJob: Job[];
}

const initialState: JobState = {
  arrJob: [],
};

const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getJobsAction: (state: JobState, action: PayloadAction<Job[]>) => {
      state.arrJob = action.payload;
    },
  },
});

export const { getJobsAction } = jobReducer.actions;

export default jobReducer.reducer;

export const getDataJobAPI = () => {
  return async (dispatch: DispatchType) => {
    const res = await axios({
      url: "https://api.easyjob.io.vn/api/v1/job?page=0&size=1&sort=string",
      method: "GET",
    });

    const action: PayloadAction<Job[]> = getJobsAction(res.data?.content);
    dispatch(action);
  };
};
