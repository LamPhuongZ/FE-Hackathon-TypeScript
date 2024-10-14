import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  username: string;
  accessToken: string;
}

export interface User {
  fullname: string;
  age: string;
  avatar: string;
  isVerified: boolean;
  numOfJob: number;
  star: string;
  createdDate: Date;
  address: string;
  provinceId: string;
  districtId: string;
  jobSkills: JobSkill[];
}

export interface JobSkill {
  id: number;
  skill: string;
  description: string;
}

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
    user: null
}

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        getUsersAction: (state: UserState, action: PayloadAction<User>) => {
            state.user = action.payload;
        }
    }
});

export const {getUsersAction} = userReducer.actions;

export default userReducer.reducer;

export const loginAPI = () => {
    
}
