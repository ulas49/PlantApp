import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  plan: 'free' | 'pro';
}

const initialState: UserState = {
  plan: 'free', 
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPlan: (state, action: PayloadAction<'free' | 'pro'>) => {
      state.plan = action.payload;
    },
  },
});

export const { setPlan } = userSlice.actions;
export default userSlice.reducer;
