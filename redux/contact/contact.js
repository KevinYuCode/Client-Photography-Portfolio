import { createSlice } from "@reduxjs/toolkit";
export const contact = createSlice({
  name: "contact",
  initialState: {
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  },
  reducers: {
    /**
     *
     * @param {*} state
     * @param {Object} payload the name
     */
    setContactName: (state, { payload }) => {
      state.contactName = payload;
    },
    /**
     *
     * @param {*} state
     * @param {String} paylod the email
     */
    setContactEmail: (state, { payload }) => {
      state.contactEmail = payload;
    },
    /**
     *
     * @param {*} state
     * @param {String} payload the message
     */
    setContactMessage: (state, { payload }) => {
      state.contactMessage = payload;
    },
    /**
     * Resets the contact info after message is sent
     * @param {*} state 
     */
    setClearContactInfo: (state) => {
      state.contactName = "";
      state.contactEmail = "";
      state.contactMessage = "";
    },
  },
});

//Action creators are generated for each case reducer function
export const { setContactName, setContactEmail, setContactMessage } = contact.actions;
export default contact.reducer;
