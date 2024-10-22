import React from 'react'
import {Button, notification} from 'antd'
import { delCookie, getCookie } from '../../utils/utilMethod'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../redux/configStore';
import { setIsLoginAction } from '../../redux/reducers/userReducer';


const LogOut: React.FC = () => {
//    const deleToken = delCookie("access_token")
const [api, contextHolder] = notification.useNotification();
const dispatch: DispatchType = useDispatch();

const handleDeleteToken = ()=>{
    delCookie("access_token")
    delCookie("userLogin")
    // setIsLogin(false)
    api.success({
        message: 'Đăng xuất thành công',
        placement: 'topRight',
        duration: 1.5,
      });
}

const handleLogOutApi = async ()=>{
    const token = getCookie("access_token")
    try {
        const response = await axios.post('https://api.easyjob.io.vn/api/v1/auth/sign-out', {}, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        dispatch(setIsLoginAction(false));
        console.log(response.data);
        handleDeleteToken()
      } catch (error) {
        console.log('Bạn chưa đăng nhập vào ', error);
        api.error({
            message: 'Bạn chưa đăng nhập',
            placement: 'topRight',
            duration: 1.5,
          });
      }
}

   
  return (
    <>
    {contextHolder}
        <Button onClick={handleLogOutApi}>
            Log out
        </Button>
    </>
  )
}

export default LogOut;