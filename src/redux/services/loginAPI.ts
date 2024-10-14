import instance from "../../configs/axiosConfigs";

export const login = async (payload: {username: string; password: string;}) => {
  try {
    const response = await instance.post("/auth/sign-in", payload);

    console.log("API request payload:", payload);
    console.log("API response:", response);

    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Lỗi truy cập");
  }
};
