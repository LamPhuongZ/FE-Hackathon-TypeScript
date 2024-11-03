import React from "react";
import { notification } from "antd";
import { delCookie, getCookie } from "../../utils/utilMethod";
import axios from "axios";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/configStore";
import {
  setIsLoginAction,
  setProfileAction,
} from "../../redux/reducers/userReducer";
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const LogOut: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();

  console.log(api);
  

  const handleDeleteToken = () => {
    delCookie("access_token");
    delCookie("userLogin");
    delCookie("username");
    delCookie("password");
    // Clear the user profile data from the Redux store
    dispatch(setProfileAction(null));
    // setIsLogin(false)
    notification.success({
      message: "Đăng xuất thành công",
      placement: "bottomRight",
      duration: 1.5,
    });
  };

  const handleLogOutApi = async () => {
    const token = getCookie("access_token"); 
    try {
      await axios.post(
        "https://api.easyjob.io.vn/api/v1/auth/sign-out",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(setIsLoginAction(false));
      handleDeleteToken();
      dispatch(setIsLoginAction(false));
      navigate("/");
    } catch (error) {
      console.log("Bạn chưa đăng nhập vào ", error);
      notification.error({
        message: "Bạn chưa đăng nhập",
        placement: "bottomRight",
        duration: 1.5,
      });
    }
  };
 

  return (
    <>
      {contextHolder}
      <h1 className="text-xl flex items-center gap-2 p-3 hover:bg-red-500 w-full hover:text-white rounded transition" onClick={handleLogOutApi}><PiSignOutBold />Đăng xuất</h1>
    </>
  );
};

export default LogOut;
