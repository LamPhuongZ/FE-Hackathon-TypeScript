import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./reducers/jobReducer";
import userReducer from "./reducers/userReducer";
import typeReducer from "./reducers/typeReducer";
import jobSkillReducer from "./reducers/jobSkillReducer";

export const store = configureStore({
  reducer: {
    jobReducer,
    jobSkillReducer,
    userReducer ,
    typeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
