import authSlice from './auth';
import dataSlice from './data';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
