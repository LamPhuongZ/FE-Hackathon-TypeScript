import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./slices/userSlice";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["userReducer"],
};

const pReducer = persistReducer(
  persistConfig,
  combineReducers({
    userReducer: userSlice,
  })
);

const store = configureStore({
  reducer: pReducer,
});

//2: sau đó phải khai báo type của dispatch y mẫu: thì khi useDispatch ở component cần dùng sẽ ko bị lỗi typescript
export type DispatchType = typeof store.dispatch;

//3: nếu ko khai báo thêm "ReturnType" cho trường hợp này thì RootState sẽ hiểu đây chỉ là một type callbackfunction thôi, vì muốn biết bên trong func có chứa kiểu dữ liệu gì thì cần phải "ReturnType" cái nữa
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;
