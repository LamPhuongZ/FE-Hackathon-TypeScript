import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { delCookie, getCookie, setCookie } from "../../utils/utilMethod";
import { ACCESS_TOKEN, httpClient, USER_LOGIN } from "../../utils/config";
import { UserLoginType } from "../../pages/AuthPage/Login";
import { routeLink } from "../../main";
import { UserRegisterType } from "../../pages/AuthPage/Register";
import { notification } from "antd";
import { JobSkill } from "./jobSkillReducer";
import { DispatchType } from "../configStore";

export interface LoginState {
  username?: string;
  accessToken?: string;
}

export interface RegisterState {
  fullname: string;
  email: string;
  password: string;
  role: string;
}

export interface UserProfileType {
  email: string;
  phone: string;
  fullname: string;
  dob: string; // day of birth
  avatar: [] | any;
  createdDate: string | null;
  address: string;
  provinceId: number;
  districtId: number;
  jobSkills?: number[] | null;
  imgFrontOfCard: [] | any;
  imgBackOfCard: [] | any;
}

export interface ChangePasswordType {
  oldPassword?: string | null;
  newPassword?: string | null;
}

export interface UserState {
  userLogin: LoginState | null;
  userProfile: UserProfileType | null;
  userRegister: RegisterState | null;
  changePassword: ChangePasswordType | null;
  isLogin: boolean;
  isLoading: boolean;
}

const initialState: UserState = {
  userLogin: getCookie(USER_LOGIN) ? JSON.parse(getCookie(USER_LOGIN)!) : null,
  userProfile: null,
  userRegister: null,
  changePassword: null,
  isLogin: !!getCookie(USER_LOGIN),
  isLoading: false,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setLoginAction: (state: UserState, action: PayloadAction<LoginState>) => {
      state.userLogin = action.payload;
      state.isLoading = false;
    },
    setProfileAction: (
      state: UserState,
      action: PayloadAction<UserProfileType | null>
    ) => {
      state.userProfile = action.payload;
      state.isLoading = false;
    },
    setRegisterAction: (
      state: UserState,
      action: PayloadAction<RegisterState>
    ) => {
      state.userRegister = action.payload;
      state.isLoading = false;
    },
    setUpdateProfileUser: (
      state: UserState,
      action: PayloadAction<UserProfileType | null>
    ) => {
      state.userProfile = action.payload;
      state.isLoading = false;
    },
    setChangePasswordAction: (
      state: UserState,
      action: PayloadAction<ChangePasswordType | null>
    ) => {
      state.changePassword = action.payload;
      state.isLoading = false;
    },
    setIsLoginAction: (state: UserState, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setLoading: (state: UserState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setLoginAction,
  setProfileAction,
  setRegisterAction,
  setUpdateProfileUser,
  setChangePasswordAction,
  setIsLoginAction,
  setLoading,
} = userReducer.actions;
export default userReducer.reducer;

export { userReducer };

export const loginAPI = createAsyncThunk(
  "user/login",
  async (userLogin: UserLoginType, { dispatch }) => {
    dispatch(setLoading(true));
     // your code to check if the user is logged in

    // If the user is not logged in, delete the cookies
    if (!initialState.isLogin) {
      delCookie('access_token');
      delCookie('userLogin');
      delCookie('username');
      delCookie('password');
    }
    try {
      const response = await httpClient.post("/api/v1/auth/sign-in", userLogin);
      setCookie(USER_LOGIN, JSON.stringify(response.data), 30);
      setCookie(ACCESS_TOKEN, response.data.data["access-token"], 30);
      const action: PayloadAction<LoginState> = setLoginAction(response.data);
      dispatch(action);
      dispatch(setLoginAction(response.data));
      dispatch(setIsLoginAction(true));
      notification.success({
        message: "Đăng nhập thành công",
        placement: "topRight",
        duration: 1.5,
      });
      routeLink.push("/");
    } catch (error) {
      notification.error({
        message: "Đăng nhập thất bại",
        placement: "topRight",
        duration: 1.5,
      });
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const registerAPI = createAsyncThunk(
  "user/register",
  async (userRegister: UserRegisterType, { dispatch }) => {
    dispatch(setLoading(true));

    try {
      const response = await httpClient.post(
        "/api/v1/auth/sign-up",
        userRegister
      );
      dispatch(setRegisterAction(response.data));
      
      console.log("🚀 ~ file: userReducer.ts:184 ~ response:", response.data);

      notification.success({
        message: "Đăng Ký thành công",
        placement: "topRight",
        duration: 1.5,
      });
      routeLink.push("/");
    } catch (error) {
      notification.error({
        message: "Đăng ký không thành công",
        placement: "topRight",
        duration: 1.5,
      });
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getProfileAPI = () => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));
    try {
      const response = await httpClient.get("/api/v1/self");

      const action: PayloadAction<UserProfileType | null> = setProfileAction(
        response.data.data
      );
      dispatch(action);
    } catch (error) {
      notification.error({
        message: "Lấy thông tin thất bại!!",
        placement: "topRight",
        duration: 1.5,
      });
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const changePasswordAPI = (changePassword: ChangePasswordType) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const response = await httpClient.post(
        "api/v1/self/change-password",
        changePassword
      );

      const action: PayloadAction<ChangePasswordType | null> =
        setChangePasswordAction(response.data);
      dispatch(action);
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Xử lý thất bại!!",
        placement: "topRight",
        duration: 1.5,
      });
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateProfileUserAPI = (userProfile: UserProfileType) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const formData = new FormData();

      for (const key in userProfile) {
        const value = userProfile[key as keyof UserProfileType];

        // Kiểm tra và thêm file
        if (value) {
          if (key === "avatar" && value instanceof File) {
            formData.append("avatar", value);
          } else if (key === "imgFrontOfCard" && value instanceof File) {
            formData.append("imgFrontOfCard", value);
          } else if (key === "imgBackOfCard" && value instanceof File) {
            formData.append("imgBackOfCard", value);
          } else if (value instanceof File) {
            formData.append(key, value); // Thêm tệp trực tiếp
          } else if (typeof value === "number" || typeof value === "string") {
            formData.append(key, value.toString());
          }

          // if (key === "jobSkills" && Array.isArray(value)) {
          //   // Thay đổi ở đây để truyền danh sách ID vào formData
          //   value.forEach((skillId: number) => {
          //     formData.append("jobSkills[]", skillId.toString());
          //   });
          // }
        }
      }

      const response = await httpClient.patch("/api/v1/self", formData);

      const action: PayloadAction<UserProfileType | null> =
        setUpdateProfileUser(response.data.data);
      dispatch(action);
    } catch (error) {
      notification.error({
        message: "Xử lý thất bại!!",
        placement: "topRight",
        duration: 1.5,
      });
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};
