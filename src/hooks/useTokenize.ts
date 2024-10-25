import jwtEncode from 'jwt-encode';
import {jwtDecode} from 'jwt-decode';

interface TokenPayload {
  password: string;
  iat: number;
  exp: number;
}
// Quá trình mã hóa data thành token
export const encodePassword = (password:string) => {
//   const password = getCookie('password');
  const token = jwtEncode({ password }, 'secretKey');
  return token;
};
// Quá trình giải mã từ token thành data

export const decodePassword = (token: string) => {
  const decodedToken = jwtDecode<TokenPayload>(token);
  return decodedToken.password;
};
