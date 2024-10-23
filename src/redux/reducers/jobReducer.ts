import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { httpClient } from "../../utils/config";

export interface Job {
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  content: Content[];
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface Content {
  jobId: number;
  title: string;
  address: string;
  phone: string;
  contactPerson: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  jobType: JobType;
  images: Image[];
  description: string;
  postedDate: Date;
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
  objJob: Job | null;
  objJobDetails: Content | null;
  isLoading: boolean;
}

const initialState: JobState = {
  objJob: null,
  objJobDetails: null,
  isLoading: false,
};

const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getJobsAction: (state: JobState, action: PayloadAction<Job>) => {
      state.objJob = action.payload;
      state.isLoading = false;
    },
    getJobDetails: (state: JobState, action: PayloadAction<Content>) => {
      state.objJobDetails = action.payload;
      state.isLoading = false;
    },
    setLoading: (state: JobState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getJobsAction, getJobDetails, setLoading } = jobReducer.actions;

export default jobReducer.reducer;

export const getDataJobAPI = (page: number, size: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(
        `/api/v1/job?page=${page}&size=${size}&direction=desc`
      );
      const action: PayloadAction<Job> = getJobsAction(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error); 
    } finally {
      dispatch(setLoading(false)); 
    }
  };
};

export const getDataJobDetailAPI = (id: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true)); 

    try {
      const res = await httpClient.get(`/api/v1/job/${id}`);
      const action: PayloadAction<Content> = getJobDetails(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error); 
    } finally {
      dispatch(setLoading(false)); 
    }
  };
};

export const getSearchDataJobAPI = (page: number, size: number, jobTypeId: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(
        `/api/v1/job?jobTypeId=${jobTypeId}&page=${page}&size=${size}&direction=desc`
      );
      const action: PayloadAction<Job> = getJobsAction(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error); 
    } finally {
      dispatch(setLoading(false)); 
    }
  };
};