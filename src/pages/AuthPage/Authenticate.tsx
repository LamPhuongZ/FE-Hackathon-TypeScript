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
          setCookie(ACCESS_TOKEN, data.data["access-token"], 30);
          navigate("/");
        });
    }
  }, []);

  return <Loading />;
}
