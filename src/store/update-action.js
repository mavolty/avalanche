import {
  updateProfile,
  updatePassword,
  confirmPasswordReset,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../services/firebase';

export const updateMyProfile = createAsyncThunk(
  'auth/update-profile',
  async (data, { rejectWithValue }) => {
    const { displayName } = data;
    try {
      if (auth.currentUser)
        return await updateProfile(auth.currentUser, {
          displayName,
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateMyPassword = createAsyncThunk(
  'auth/update-password',
  async (data, { rejectWithValue }) => {
    const { newPassword } = data;
    const { currentUser: user } = auth;
    try {
      if (user) return await updatePassword(user, newPassword);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const confirmMyPasswordReset = createAsyncThunk(
  'auth/confirm-password-reset',
  async (data, { rejectWithValue }) => {
    const { code, newPassword } = data;
    try {
      return await confirmPasswordReset(auth, code, newPassword);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
