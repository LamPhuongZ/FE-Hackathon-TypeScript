import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { httpClient } from "../../utils/config";

export interface Candidate {
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

export interface SizeCandidate {
  size: number;
}

export interface Content {
  id: number;
  address: string;
  fullname: string;
  age: number;
  avatar: string;
  isVerified: boolean;
  numOfJob: number;
  hourOfWork: number;
  star: null;
  createdDate: Date;
  jobSkills: jobSkills[];
  SizeCandidate?: SizeCandidate;
}

export interface jobSkills {
  id: number;
  skill: string;
  description: string;
}

export interface CandidateState {
  objCandidate: Candidate | null;
  objCandiDetails: Content | null;
  isLoading: boolean;
}

const initialState: CandidateState = {
  objCandidate: null,
  objCandiDetails: null,
  isLoading: false,
};

const candidateReducer = createSlice({
  name: "candidateReducer",
  initialState,
  reducers: {
    getCandidateAction: (
      state: CandidateState,
      action: PayloadAction<Candidate>
    ) => {
      state.objCandidate = action.payload;
      state.isLoading = false;
    },
    setLoading: (state: CandidateState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getCandidateDetail: (
      state: CandidateState,
      action: PayloadAction<Content>
    ) => {
      state.objCandiDetails = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getCandidateAction, getCandidateDetail, setLoading } =
  candidateReducer.actions;

export default candidateReducer.reducer;

export const getDataCandidateAPI = (jobId: number, page: number, size: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(
        `/api/v1/apply-job/${jobId}/WAITING?page=${page}&size=${size}&sort=string`
        // `/api/v1/apply-job?page=${page}&size=${size}&sort=string`
      );
      const action: PayloadAction<Candidate> = getCandidateAction(
        res.data.data
      );
      dispatch(action);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getDataCandidateDetailAPI = (idPage: number, idCandidate: number, size: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(
        `/api/v1/apply-job/${idPage}/WAITING?page=0&size=${size}&sort=string`
        // `/api/v1/apply-job`
      );
      const candidateDetail = res.data.data?.content.find(
        (item: Content) => item.id === idCandidate
      );
      if (candidateDetail) {
        candidateDetail.SizeCandidate = { size: res.data.data.size };
      }
      const action: PayloadAction<Content> =
        getCandidateDetail(candidateDetail);
      dispatch(action);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
