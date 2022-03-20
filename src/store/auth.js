const { createSlice } = require('@reduxjs/toolkit');

const initialState = { authUsername: '' };

const authSlice = createSlice({
  name: 'authName',
  initialState: initialState,
  reducers: {
    setAuthName(state, action) {
      state.authUsername = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
