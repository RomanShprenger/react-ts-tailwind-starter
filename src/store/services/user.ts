import { api } from "./api";
import type { User, UserName, Phone, newEmailBody } from "../../types/UserTypes";

export const accountsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: "/accounts/me/",
      }),
      providesTags: (res) => [{ type: 'Users', id: res?.email }]
    }),
    changePhone: builder.mutation<null, Phone>({
      query: (credentials) => ({
        url: '/accounts/update_phone/',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Users']
    }),
    changeEmail: builder.mutation<null, newEmailBody>({
      query: (credentials) => ({
        url: '/accounts/email-changes/',
        method: 'POST',
        body: {
          new_email: credentials.new_email,
          current_password: credentials.current_password
        },
      }),
      invalidatesTags: ['Users']
    }),
    changeUserName: builder.mutation<null, UserName>({
      query: (credentials) => ({
        url: `/accounts/me/`,
        method: 'PATCH',
        body: credentials
      }),
      invalidatesTags: ['Users']
    }),
  }),
})

export const {
  useGetUserQuery,
  useChangeEmailMutation,
  useChangeUserNameMutation
} = accountsApi
