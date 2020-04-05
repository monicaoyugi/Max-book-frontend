export interface User {
    first_name: string;
    second_name: string;
    password: string;
    confirmed_password: string;
    username: string;
    role: string;
    contact: string;
    adress: string;
}

export interface SignupedUser {
    first_name: string;
    second_name: string;
    username: string;
    role: string;
    contact: string;
    adress: string;
}

export interface IUser {
    user: SignupedUser;
    message: string;
}