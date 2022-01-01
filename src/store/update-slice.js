import { confirmMyPasswordReset, updateMyProfile } from './update-action';
import { createSlice } from '@reduxjs/toolkit';

const profileState = {
  profileStatus: {
    isLoading: false,
    error: null,
    success: null,
  },
  confirmPasswordStatus: {
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

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileState,
  reducers: {},
  extraReducers: builder => {
    payloadCreator(builder, updateMyProfile, 'profileStatus');
    payloadCreator(builder, confirmMyPasswordReset, 'confirmPasswordStatus');
  },
});

const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
export default profileReducer;
