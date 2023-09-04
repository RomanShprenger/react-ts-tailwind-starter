import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../services/auth'
import type { RootState } from '../../store';
import { TOKEN_KEY } from '../../constants';

type AuthState = {
  token?: string | null
}

const userToken = localStorage.getItem(TOKEN_KEY)
  ? localStorage.getItem(TOKEN_KEY)
  : null

const initialState: AuthState = {
  token: userToken
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(TOKEN_KEY);
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          if(payload && payload.token) {
            localStorage.setItem(TOKEN_KEY, payload.token);
            state.token = payload.token;
          }
        }
      )
      .addMatcher(
        authApi.endpoints.logout.matchFulfilled,
        (state) => {
          localStorage.removeItem(TOKEN_KEY);
          state.token = null;
        }
      )
  },
})

export const { logout } = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state: RootState) => state.auth.token;
