import instance from "../configs/axiosConfigs"

interface LoginApi{
    email: string,
    password: string,
}

const loginApi = async(payload:LoginApi)=>{
    const response = await instance.post('https://api.easyjob.io.vn/api/v1/auth/sign-in', payload
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.data;
}

export default loginApi;
