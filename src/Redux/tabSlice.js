import { createSlice } from '@reduxjs/toolkit';

export const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    current: 'addProduct',
  },
  reducers: {
    change_currentTab: (state, action) => {
      state.current = action.payload ;
    },
  },
});

export const { change_currentTab } = tabSlice.actions;
export default tabSlice.reducer;
