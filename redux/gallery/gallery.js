import { createSlice } from "@reduxjs/toolkit";
import { PHOTOS } from "../../assets/assets";

export const gallery = createSlice({
  name: "nav",
  initialState: {
    activeImage: true,
    imageOn: false,
    hoverNext: false,
    hoverPrev: false,
    scrollDirection: "UP",
  },
  reducers: {
    /**
     *
     * @param {*} state
     * @param {Object} payload the image object
     */
    setActiveImage: (state, { payload }) => {
      state.activeImage = payload;
      state.imageOn = true;
    },
    /**
     *
     * @param {*} state
     * @param {Boolean} payload the state of whether the modal is on
     */
    setImageOn: (state, { payload }) => {
      state.imageOn = payload;
    },
    /**
     *
     * @param {*} state
     * @param {Number} payload the next/prev photo index to switch to
     */
    setSwitchImage: (state, { payload }) => {
      const LAST_INDEX = PHOTOS.length - 1;
      const FIRST_INDEX = 0;
      let validIndex = 0;

      //Makes sure the index is never out of bounds
      if (payload > LAST_INDEX) {
        validIndex = FIRST_INDEX;
      } else if (payload < FIRST_INDEX) {
        validIndex = LAST_INDEX;
      } else {
        validIndex = payload;
      }

      //Sets the new active image
      state.activeImage = { src: PHOTOS[validIndex].src ?? PHOTOS[0].src, index: validIndex ?? 0 };
    },
    /**
     *
     * @param {*} state
     * @param {Boolean} payload the state of whether image is hover on right side of modal
     */
    setHoverNext: (state, { payload }) => {
      state.hoverNext = payload;
    },
    /**
     *
     * @param {*} state
     * @param {Boolean} payload the state of whether image is hover on left side of modal
     */
    setHoverPrev: (state, { payload }) => {
      state.hoverPrev = payload;
    },
    /**
     *
     * @param {*} state
     * @param {String} payload scroll direction either UP or DOWN
     */
    setScrollDirection: (state, { payload }) => {
      state.scrollDirection = payload;
    },
  },
});

//Action creators are generated for each case reducer function
export const { setActiveImage, setImageOn, setSwitchImage, setHoverNext, setHoverPrev, setScrollDirection } =
  gallery.actions;
export default gallery.reducer;
