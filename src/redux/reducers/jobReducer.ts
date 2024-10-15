import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { httpClient } from "../../utils/config";


export interface Job{
  totalElements:    number;
  totalPages:       number;
  size:             number;
  number:           number;
  content:          Content[];
  first:            boolean;
  last:             boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface Content {
  jobId:         number;
  title:         string;
  address:       string;
  phone:         string;
  contactPerson: string;
  startDate:     Date;
  endDate:       Date;
  duration:      number;
  jobType:       JobType;
  images:        Image[];
  description:   string;
  postedDate:    Date;
  verified:      boolean;
}

export interface Image {
  url:                string;
  cloudiaryPuclicUrl: string;
  typeOfImg:          string;
}

export interface JobType {
  id:          number;
  name:        string;
  description: string;
  minPrice:    number;
  maxPrice:    number;
}

export interface JobState {
  objJob: Job | null;
  objJobDetails: Content | null
}

const initialState: JobState = {
  objJob: null,
  objJobDetails: null
};

const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getJobsAction: (state: JobState, action: PayloadAction<Job>) => {
      state.objJob = action.payload;
    },
    getJobDetails: (state: JobState, action: PayloadAction<Content>) => {
      state.objJobDetails = action.payload;
    },
  },
});

export const { getJobsAction, getJobDetails } = jobReducer.actions;

export default jobReducer.reducer;

export const getDataJobAPI = (page:number, size:number) => {
  return async (dispatch: DispatchType) => {
    const res = await httpClient.get(`/api/jobs?page=${page}&size=${size}&sort=stringy`)

    const action: PayloadAction<Job> = getJobsAction(res.data.data);
    dispatch(action);
  };
};

export const getDataJobDetailAPI = (id: number) => {
  return async (dispatch: DispatchType) => {
    const res = await httpClient.get(`/api/jobs/${id}`)

    const action: PayloadAction<Content> = getJobDetails(res.data.data);
    dispatch(action);
  }
}
