import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./nav";
import galleryReducer from "./gallery/gallery";
import contactReducer from "./contact/contact";
export default configureStore({
  reducer: {
    navState: navReducer,
    galleryState: galleryReducer,
    contactState: contactReducer,
  },
});
