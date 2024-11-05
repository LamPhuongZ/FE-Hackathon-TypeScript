import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { httpClient } from "../../utils/config";

export interface JobSkill {
  id: number;
  skill: string;
  description: string;
}

export interface JobSkillState {
  objJobSkill: JobSkill[] | null;
  isLoading: boolean;
}

const initialState: JobSkillState = {
  objJobSkill: null,
  isLoading: false,
};

const jobSkillReducer = createSlice({
  name: "jobSkillReducer",
  initialState,
  reducers: {
    getJobsSkillAction: (
      state: JobSkillState,
      action: PayloadAction<JobSkill[]>
    ) => {
      state.objJobSkill = action.payload;
      state.isLoading = false;
    },
    setLoading: (state: JobSkillState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getJobsSkillAction, setLoading } = jobSkillReducer.actions;

export default jobSkillReducer.reducer;

export const getDataJobSkillAPI = () => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(`/api/v1/job-skill`);
      const action: PayloadAction<JobSkill[]> = getJobsSkillAction(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};


