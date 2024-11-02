const urlR = import.meta.env.DEV
  ? "http://localhost:3000/authenticate"
  : "https://easyjob.io.vn/authenticate";
export const OAuthConfig = {
  clientId:
    "1050382932656-kalm37mis8iqvkhmg4hp8dtne2d0vnas.apps.googleusercontent.com",
  redirectUri: urlR,
  // redirectUri: "https://api.easyjob.io.vn/authenticate",
  authUri: "https://accounts.google.com/o/oauth2/auth",
};
 