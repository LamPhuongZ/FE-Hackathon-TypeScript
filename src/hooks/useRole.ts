import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { getCookie } from "../utils/utilMethod";
import { ACCESS_TOKEN } from "../utils/config";

interface TokenPayload {
  sub: string;
  iat: number;
  exp: number;
}

// custom hook to get role and sub from token
export const useRole = () => {
  const [tokenData, setTokenData] = useState<{
    sub: string | null;
  }>({
    sub: null,
  });
  const [isTokenExp, setIsTokenExp] = useState<boolean>(false);

  useEffect(() => {
    const token = getCookie(ACCESS_TOKEN);
    const oldToken = getCookie(ACCESS_TOKEN); // Lấy token cũ

    if (token) {
      try {
        // token decoding
        const decodedToken = jwtDecode<TokenPayload>(token);

        // Check if token is expired
        const currentTime = Date.now() / 1000; // convert to seconds
        if (decodedToken.exp < currentTime) {
          setIsTokenExp(true); // Token has expired

          if (oldToken) {
            // Xét lại token cũ như refresh token
            const decodedOldToken = jwtDecode<TokenPayload>(oldToken);
            setTokenData({
              sub: decodedOldToken.sub || null,
            });
            setIsTokenExp(false);
          }
        } else {
          setTokenData({
            sub: decodedToken.sub || null,
          });
          setIsTokenExp(false);
        }
      } catch (error) {
        console.error("Token không hợp lệ hoặc lỗi khi giải mã token", error);
        setIsTokenExp(true); // Có thể thiết lập là hết hạn nếu không giải mã được
      }
    } else {
      setIsTokenExp(true); // Thiết lập là hết hạn nếu không tìm thấy token
    }
  }, []);

  return { ...tokenData, isTokenExp };
};
