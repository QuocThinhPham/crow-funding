import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
   name: 'global',
   initialState: {
      showSidebar: false,
   },
   reducers: {
      toggleSidebar: (state, action) => ({
         ...state,
         showSidebar:
            typeof action.payload !== 'undefined'
               ? action.payload
               : !state.showSidebar,
      }),
   },
});

export const { toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;
