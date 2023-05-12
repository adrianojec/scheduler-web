
export enum AUTH_FORM{
    LOGIN,
    REGISTER
}

export enum REQUEST_STATUS_MESSAGE{
    UNAUTHORIZED = "Unauthorized",
    FORBIDDEN = "Forbidden",
    SERVER_ERROR = "Server error",
    NOT_FOUND = "Not Found"
}

export enum SLICE_NAME {
    USERS = "users" 
}

export enum ROUTE {
    HOME = "/",
    LOGIN = "/login",
    REGISTER = "/register",
}

export enum FORM_TYPE {
    EMAIL = "email",
    PASSWORD = "password",
    TEXT = "text"
}