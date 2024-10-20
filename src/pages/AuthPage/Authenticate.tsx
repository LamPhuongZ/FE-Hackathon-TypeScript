import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { setToken } from "../../services/localStorageService";
import { getCookie, setCookie } from "../../utils/utilMethod";
import { ACCESS_TOKEN } from "../../utils/config";

export default function Authenticate() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    console.log(window.location.href);


 // Lấy Role từ localStorage
    const role = localStorage.getItem("role"); 
    console.log(window.location.href);


 // Lấy Role từ localStorage
    const role = localStorage.getItem("role"); 

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
          // console.log(data);
          setCookie(ACCESS_TOKEN, data.data['access-token'], 30);
          // setToken(data.result?.token);
          // console.log(data);
          setCookie(ACCESS_TOKEN, data.data['access-token'], 30);
          // setToken(data.result?.token);
          setIsLoggedin(true);
        });
    }
  }, []);

  useEffect(() => {
    if (isLoggedin) {
      navigate("/");
    }
  }, [isLoggedin, navigate]);

  return (
    <>
      auth
    </>
  );
  return (
    <>
      auth
    </>
  );
}
