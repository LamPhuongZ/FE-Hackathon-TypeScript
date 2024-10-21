import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { httpClient } from "../../utils/config";

export interface JobType {
  id: number;
  name: string;
  description: string;
  minPrice: number;
  maxPrice: number;
}

export interface JobTypeState {
  objJobType: JobType | null;
  isLoading: boolean;
}

const initialState: JobTypeState = {
  objJobType: null,
  isLoading: false,
};

const typeReducer = createSlice({
  name: "typeReducer",
  initialState,
  reducers: {
    getJobTypes: (state: JobTypeState, action: PayloadAction<JobType>) => {
      state.objJobType = action.payload;
      state.isLoading = false;
    },
    setLoading: (state: JobTypeState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {getJobTypes, setLoading} = typeReducer.actions;

export default typeReducer.reducer;

export const getJobTypeAPI = () => {
    return async (dispatch: DispatchType) => {
      dispatch(setLoading(true)); 
  
      try {
        const res = await httpClient.get("/api/v1/job-type");
        const action: PayloadAction<JobType> = getJobTypes(res.data.data);
        dispatch(action);
      } catch (error) {
        console.error(error); 
      } finally {
        dispatch(setLoading(false)); 
      }
    };
  };
