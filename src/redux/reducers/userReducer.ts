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
import { UserRegisterType } from "../../pages/AuthPage/Register";

export interface LoginState {
  username: string;
  accessToken: string;
}

export interface RegisterState {
  fullname: string;
  email: string;
  password: string;
  role: string;
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
  userProfile: UserProfileType | null;
  userRegister: RegisterState | null;
}

const initialState: UserState = {
  userLogin: getDataJsonStorage(USER_LOGIN),
  userProfile: null,
  userRegister: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setLoginAction: (state: UserState, action: PayloadAction<LoginState>) => {
      state.userLogin = action.payload;
    },
    setProfileAction: (
      state: UserState,
      action: PayloadAction<UserProfileType>
    ) => {
      state.userProfile = action.payload;
    },
    setRegisterAction: (
      state: UserState,
      action: PayloadAction<RegisterState>
    ) => {
      state.userRegister = action.payload;
    },
  },
});

export const { setLoginAction, setProfileAction, setRegisterAction } =
  userReducer.actions;

export default userReducer.reducer;

export const loginAPI = (userLogin: UserLoginType) => {
  return async (dispatch: DispatchType) => {
    try {
      const response = await httpClient.post("/api/v1/auth/sign-in", userLogin);
      setDataJsonStorage(USER_LOGIN, response.data);
      setDataTextStorage(ACCESS_TOKEN, response.data.data["access-token"]);
      setCookie(ACCESS_TOKEN, response.data.data["access-token"], 30);
      const action: PayloadAction<LoginState> = setLoginAction(response.data);
      dispatch(action);
      toast.success("Đăng nhập thành công");
      routeLink.push("/");
    } catch (error) {
      toast.error("Đăng nhập thất bại!");
      throw error;
    }
  };
};

export const registerAPI = (userRegister: UserRegisterType) => {
  return async (dispatch: DispatchType) => {
    try {
      const response = await httpClient.post(
        "/api/v1/auth/sign-up",
        userRegister
      );

      console.log(response.data);

      const action: PayloadAction<RegisterState> = setRegisterAction(
        response.data
      );
      toast.success("Đăng ký thành công");
      dispatch(action);
      routeLink.push("/");
    } catch (error) {
      toast.error("Đăng ký thất bại!");
      throw error;
    }
  };
};

export const getProfileAPI = () => {
  return async (dispatch: DispatchType) => {
    try {
      const response = await httpClient.post("/api/v1/self");

      console.log(response.data);

      const action: PayloadAction<UserProfileType> = setProfileAction(
        response.data
      );
      dispatch(action);
    } catch (error) {
      toast.error("Lấy thông tin cá nhân thất bại");
      throw error;
    }
  };
};
