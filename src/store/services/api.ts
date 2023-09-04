import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { RootState } from '../../store';
import { logout } from '../reducers/auth';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_SERVER,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth && (getState() as RootState).auth.token
    if (token) {
      headers.set('authorization', `Token ${token}`)
    }
    return headers
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
};


export const api = createApi({
  reducerPath: "api",
  keepUnusedDataFor: 1,
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Invoices', 'Users', 'Wallets'],
  endpoints: () => ({}),
})
