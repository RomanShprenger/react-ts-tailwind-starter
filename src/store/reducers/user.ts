import { createSlice } from '@reduxjs/toolkit'
import { accountsApi } from '../services/user'
import { authApi } from '../services/auth'
import type { RootState } from '..'
import { User } from "../../types/UserTypes";

const initialState: User = {
  email: "",
  phone: "",
  username: "",
}

const userDataUpdate = (state: User, { payload }: any) => {
  state.email = payload.email;
  state.phone = payload.phone || initialState.phone;
  state.username = payload.username || initialState.username;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePhoneState: (state, action) => {
      state.phone = action.payload;
    },
    updateUserName: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.signup.matchFulfilled,
        userDataUpdate
      )
      .addMatcher(
        accountsApi.endpoints.getUser.matchFulfilled,
        userDataUpdate
      )
  },
})


export const { updateEmail, updatePhoneState, updateUserName } = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state: RootState) => state.user;
