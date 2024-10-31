import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setCookie } from "../../utils/utilMethod";
import { ACCESS_TOKEN } from "../../utils/config";
import Loading from "../../components/loading";

export default function Authenticate() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(window.location.href);

    // Lấy Role từ localStorage
    const role = localStorage.getItem("role");
    console.log(window.location.href);

    // Lấy Role từ localStorage
    const authCodeRegex = /code=([^&]+)/;
    const isMatch = window.location.href.match(authCodeRegex);

    if (isMatch) {
      const authCode = isMatch ? isMatch[1] : null;

      // Thay thế đoạn fetch bằng axios
      axios
        .post(`https://api.easyjob.io.vn/api/v1/auth/outbound`, {
          params: {
            code: authCode,
            role: role,
          },
        })
        .then((response) => {
          // Truy cập dữ liệu từ response
          setCookie(ACCESS_TOKEN, response.data.data["access-token"], 30);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error during authentication:", error);
          // Xử lý lỗi nếu cần thiết
        });
    }
  }, []);

  return <Loading />;
}
