import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    navOn: false,
    closedNavWidth: "60px",
    openNavWidth: "307px",
    screenSize: "DESKTOP",
  },
  reducers: {
    /**
     *
     * @param {*} state
     * @param {Boolean} payload the state of the nav
     */
    setNavOn: (state, { payload }) => {
      state.navOn = payload;
    },
    /**
     *
     * @param {*} state
     * @param {String} payload the close nav width
     */
    setClosedNavWidth: (state, { payload }) => {
      state.closedNavWidth = payload;
    },
    /**
     *
     * @param {*} state
     * @param {String} payload the open nav width
     */
    setOpenNavWidth: (state, { payload }) => {
      state.openNavWidth = payload;
    },
    /**
     *
     * @param {*} state
     * @param {String} payload the name of the screen size
     */
    setScreenSize: (state, { payload }) => {
      state.screenSize = payload;
    },
  },
});

//Action creators are generated for each case reducer function
export const { setNavOn, setClosedNavWidth, setOpenNavWidth, setScreenSize } = navSlice.actions;
export default navSlice.reducer;
