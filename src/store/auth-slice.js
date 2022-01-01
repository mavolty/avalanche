import {
  register,
  login,
  resetPassword,
  verifyPassword,
  authWithGoogle,
} from './auth-action';
import { createSlice } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

const authState = {
  authStatus: undefined,
  registerStatus: {
    isLoading: false,
    error: null,
    success: null,
  },
  loginStatus: {
    isLoading: false,
    error: null,
    success: null,
  },
  googleStatus: {
    isLoading: false,
    error: null,
    success: null,
  },
  resetPasswordStatus: {
    isLoading: false,
    error: null,
    success: null,
  },
  verifyPasswordStatus: {
    isLoading: false,
    error: null,
    success: null,
  },
};

const payloadCreator = (builder, thunk, initialState) => {
  builder.addCase(thunk.pending, state => {
    state[initialState].isLoading = true;
    state[initialState].error = null;
    state[initialState].success = null;
  });
  builder.addCase(thunk.fulfilled, state => {
    state[initialState].isLoading = false;
    state[initialState].error = null;
    state[initialState].success = true;
  });
  builder.addCase(thunk.rejected, (state, action) => {
    state[initialState].isLoading = false;
    state[initialState].error = action.payload;
    state[initialState].success = null;
  });
};

export const authStateObserver = () => {
  return dispatch => {
    onAuthStateChanged(auth, user => {
      dispatch(authActions.setAuthStatus(undefined));
      if (user) {
        dispatch(authActions.setAuthStatus(user));
      } else {
        dispatch(authActions.setAuthStatus(null));
      }
    });
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setAuthStatus: (state, action) => {
      state.authStatus = action.payload;
    },
  },
  extraReducers: builder => {
    payloadCreator(builder, register, 'registerStatus');
    payloadCreator(builder, authWithGoogle, 'googleStatus');
    payloadCreator(builder, login, 'loginStatus');
    payloadCreator(builder, resetPassword, 'resetPasswordStatus');
    payloadCreator(builder, verifyPassword, 'verifyPasswordStatus');
  },
});

const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export default authReducer;
