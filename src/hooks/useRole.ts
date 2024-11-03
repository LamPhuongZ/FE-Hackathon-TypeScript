import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { getCookie } from "../utils/utilMethod";
import { ACCESS_TOKEN } from "../utils/config";

interface TokenPayload {
  role: string;
  sub: string;
  iat: number;
  exp: number;
}

// custom hook to get role and sub from token
export const useRole = () => {
  const [tokenData, setTokenData] = useState<{
    role: string | null;
    sub: string | null;
  }>({
    role: null,
    sub: null,
  });
  const [isTokenExp, setIsTokenExp] = useState<boolean>(false);

  useEffect(() => {
    const token = getCookie(ACCESS_TOKEN);

    if (token) {
      try {
        // token decoding
        const decodedToken = jwtDecode<TokenPayload>(token);

        // Check if token is expired
        const currentTime = Date.now() / 1000; // convert to seconds
        if (decodedToken.exp < currentTime) {
          setIsTokenExp(true); // Token has expired
          setTokenData({ role: null, sub: null }); // Reset token data
        } else {
          setTokenData({
            role: decodedToken.role || null, // Ensure role is valid
            sub: decodedToken.sub || null,
          });
          setIsTokenExp(false);
        }
      } catch (error) {
        console.error("Token không hợp lệ hoặc lỗi khi giải mã token", error);
        setTokenData({ role: null, sub: null });
        setIsTokenExp(true); // Có thể thiết lập là hết hạn nếu không giải mã được
      }
    } else {
      setTokenData({ role: null, sub: null }); // Token not found
      setIsTokenExp(true); // Thiết lập là hết hạn nếu không tìm thấy token
    }
  }, []);

  return { ...tokenData, isTokenExp };
};
