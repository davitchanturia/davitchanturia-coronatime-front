const { createSlice } = require('@reduxjs/toolkit');

const initialState = { countryStats: {}, worldStats: {} };

const dataSlice = createSlice({
  name: 'statistics',
  initialState: initialState,
  reducers: {
    setCountryStats(state, action) {
      state.countryStats = action.payload;
    },
    setWorldStats(state, action) {
      state.worldStats = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
