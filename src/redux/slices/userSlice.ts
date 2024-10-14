import { login } from "../services/loginAPI";
import { SLICE_NAMESPACE, TOKEN_KEY } from "../../utils/settings";
import { InitialState, LoginTypes, User } from "../interfaces";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  user: null,
  isLoading: false,
  isError: false,
};

// Đăng nhập
export const fetchLoginAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/sign-in`,
  async (values: { username: string; password: string }, thunkApi) => {
    try {
      const response = await login(values);
      // lưu accessToken từ api trả về vào localStorage

      console.log(response.data);

      const { "access-token": accessToken } = response.data;
      if (accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken);
        return response.data;
      } else {
        console.error("No access token found in response.");
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(TOKEN_KEY);
      state.user = null;
    },
    cleanUpUser: (state) => {
      state.isError = false;
      state.isLoading = false;
    },
    updateInfoUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Đăng nhập
    builder.addCase(fetchLoginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchLoginAction.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchLoginAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
export const { logout, cleanUpUser, updateInfoUser } = userSlice.actions;
