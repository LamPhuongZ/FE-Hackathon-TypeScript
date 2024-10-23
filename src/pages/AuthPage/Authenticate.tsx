import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { setCookie } from "../../utils/utilMethod";
import { ACCESS_TOKEN } from "../../utils/config";

export default function Authenticate() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

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
      fetch(
        `https://api.easyjob.io.vn/api/v1/auth/outbound?code=${authCode}&role=${role}`,
        {
          method: "POST",
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCookie(ACCESS_TOKEN, data.data['access-token'], 30);
          setIsLogin(true);
        });
    }
  }, []);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <>
      auth
    </>
  );
}
