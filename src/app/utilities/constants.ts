// App
export const APP_BASE_URL = "http://localhost:5000/api";

// API
export const CONFIG_HEADER = (token: string) => `Bearer ${token}`;
export const FETCH_CURRENT_USER_API = "users/current-user";
export const LOGIN_API = "users/login";
export const REGISTER_API = "users/register";

// Image paths
export const LOGIN_IMAGE = "/images/login.png"

// Validation messages
export const FIRST_NAME_IS_REQUIRED = "First name is required.";

// String constants
export const DONT_HAVE_AN_ACCOUNT = "Don't have an account yet?";
export const EMAIL = "Email";
export const EMPTY_STRING = "";
export const LOGIN = "Login";
export const PASSWORD = "Password";
export const WELCOME_BACK = "Welcome Back!";
export const SIGN_UP = "Sign Up";
export const USER = "User";