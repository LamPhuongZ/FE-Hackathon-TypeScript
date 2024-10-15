import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getDataJsonStorage,
  setCookie,
  setDataJsonStorage,
  setDataTextStorage,
} from "../../utils/utilMethod";
import { ACCESS_TOKEN, httpClient, USER_LOGIN } from "../../utils/config";
import { DispatchType } from "../configStore";
import { UserLoginType } from "../../pages/AuthPage/Login";
import { routeLink } from "../../main";

export interface LoginState {
  username: string;
  accessToken: string;
}

export interface UserProfileType {
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
  userLogin: LoginState | null;
}

const initialState: UserState = {
  userLogin: getDataJsonStorage(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setLoginAction: (state: UserState, action: PayloadAction<LoginState>) => {
      state.userLogin = action.payload;
    },
  },
});

export const { setLoginAction } = userReducer.actions;

export default userReducer.reducer;

export const loginAPI = (userLogin: UserLoginType) => {
  return async (dispatch: DispatchType) => {
    try {
      const response = await httpClient.post("/api/v1/auth/sign-in", userLogin);

      console.log(response.data);
      


      setDataJsonStorage(USER_LOGIN, response.data);
      setDataTextStorage(ACCESS_TOKEN, response.data["access-token"]);
      setCookie(ACCESS_TOKEN, response.data["access-token"], 30);
      const action: PayloadAction<LoginState> = setLoginAction(response.data);
      dispatch(action);
      routeLink.push("/");
    } catch (error) {
      toast.error("Đăng nhập thất bại!");
      throw error;
    }
  };
};
