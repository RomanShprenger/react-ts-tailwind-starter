export interface Phone {
    phone: string
}

export interface Token {
    token?: string
}

export interface Email {
    email: string
}

export interface newEmailBody {
    new_email: string,
    current_password: string,
}

export interface User {
    email: string
    phone: string
    username: string,
}

export interface UserName {
    first_name: string,
    last_name: string,
}

export interface Login {
    email: string
    password: string,
}

export interface ResetConfirm {
    uid?: string,
    token?: string,
    new_password: string
}

export interface SignUpRequest {
    first_name: string,
    last_name: string,
    email: string
    password: string
}

export interface SignUpResponse {
    first_name: string,
    last_name: string,
    email: string
}
