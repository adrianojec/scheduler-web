export interface User{
    userName: string,
    token: string
}

export interface LoginUserInput{
    email: string,
    password: string
}

export interface RegisterUserInput{
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface UserState{
    isFetching: boolean,
    user: User | null,
    token: string | null
}