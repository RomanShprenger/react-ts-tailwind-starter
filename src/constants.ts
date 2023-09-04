export const API_URL = process.env.REACT_APP_API_SERVER || "http://localhost:8000/api/v1";

export const TOKEN_KEY = "TOKEN_KEY";

export const ENABLE_MOCKS = {
  testHandlers: true,
};
export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  AUTH_LOGIN: "/login",
  AUTH_SIGNUP: "/signup",
  AUTH_RECOVERY: "/recovery",
  NOT_FOUND: "/404"
}

export const FOOTER_LINKS = [
  {
    text: "Instagram",
    href: "https://www.instagram.com/"
  },
  {
    text: "Google",
    href: "https://www.google.com/"
  }
];