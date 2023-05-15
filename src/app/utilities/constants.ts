import { NavigationPath } from "../models/navigation_path";
import { ROUTE } from "./enums";

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
export const EMAIL_IS_REQUIRED = "Email is required.";
export const FIRST_NAME_IS_REQUIRED = "First name is required.";
export const LAST_NAME_IS_REQUIRED = "Last name is required.";
export const PASSWORD_IS_REQUIRED = "Password is required.";
export const PASSWORD_NOT_MATCHED = "Password didn't match.";
export const USER_NAME_IS_REQUIRED = "User name is required.";

// String constants
export const ALREADY_HAVE_AN_ACCOUNT = "Already have an account?";
export const BRANCHES = "Branches";
export const CLIENTS = "Clients";
export const CONFIRM_PASSWORD = "Confirm Password";
export const DONT_HAVE_AN_ACCOUNT = "Don't have an account yet?";
export const EMAIL = "Email";
export const EMPLOYEES = "Employees";
export const EMPTY_STRING = "";
export const FIRST_NAME = "First name";
export const HOME = "Home";
export const LAST_NAME = "Last name";
export const LOGIN = "Login";
export const PASSWORD = "Password";
export const SERVICES = "Services";
export const SIGN_IN = "Sign in";
export const SIGN_UP = "Sign up";
export const REGISTER = "Register";
export const USER = "User";
export const USER_NAME = "User name";
export const WELCOME_BACK = "Welcome Back!";

// Navigation Path
export const navigationPaths: NavigationPath[] = [
    {
        title: HOME,
        path: ROUTE.HOME
    },
    {
        title: BRANCHES,
        path: ROUTE.BRANCHES
    },
    {
        title: CLIENTS,
        path: ROUTE.CLIENTS
    },
    {
        title: EMPLOYEES,
        path: ROUTE.EMPLOYEES
    },
    {
        title: SERVICES,
        path: ROUTE.SERVICES
    },
];