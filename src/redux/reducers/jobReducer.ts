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
  endDate:       null;
  duration:      number;
  jobType:       JobType;
  images:        Image[];
  description:   string;
  postedDate:    null;
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
    const res = await httpClient.get('/api/v1/job?page=0&size=1&sort=string')

    const action: PayloadAction<Job[]> = getJobsAction(res.data.data);
    dispatch(action);
  };
};
