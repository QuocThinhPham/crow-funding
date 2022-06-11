import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from './global/globalSlice';

export default combineReducers({
   global: globalReducer,
});
