import authSlice from 'store/auth';
import dataSlice from 'store/data';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
