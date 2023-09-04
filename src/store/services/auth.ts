import { api } from "./api";
import type { Token, Email, Login, ResetConfirm, SignUpRequest, SignUpResponse } from "../../types/UserTypes";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Token, Login>({
      query: (credentials) => ({
        url: '/auth/login/',
        method: 'POST',
        body: {
          email: credentials.email,
          password: credentials.password
        }
      }),
      invalidatesTags: ['Users']
    }),
    signup: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (credentials) => ({
        url: '/accounts/',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Users']
    }),
    recovery: builder.mutation<Email, Email>({
      query: (credentials) => ({
        url: '/accounts/reset_password/',
        method: 'POST',
        body: credentials,
      }),
    }),
    recoveryConfirm: builder.mutation<null, ResetConfirm>({
      query: (credentials) => ({
        url: '/accounts/reset_password_confirm/',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<null, null>({
      query: () => ({
        url: '/auth/logout/',
        method: 'POST',
      }),
      invalidatesTags: ['Users']
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const {
  useLoginMutation,
  useSignupMutation,
  useProtectedMutation,
  useRecoveryMutation,
  useRecoveryConfirmMutation,
  useLogoutMutation
} = authApi;
