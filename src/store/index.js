import authSlice from './auth';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
