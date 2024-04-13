import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // CONTACT, STARRED, SHARED
  },
  // if the initialState does not show in the redux-toolkit
  // clear the loack storage from the application bar (from chrome developers wigit) and hard refresh the web page
  snackbar: {
    open: false,
    message: null,
    severity: null,
  },
};
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle sidebar
    toogleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    openSnackbar(state, action) {
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnakbar(state, action) {
      state.snackbar.open = false;
      state.snackbar.severity = null;
      state.snackbar.message = null;
    },
  },
});

export default slice.reducer;

//
export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toogleSidebar());
  };
}
export function UpdateSidebar(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}

export function showSnackbar({ severity, message }) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.openSnackbar({ severity, message }));

    setTimeout(() => {
      dispatch(slice.actions.closeSnakbar());
    }, 6000);
  };
}

export function closeSnakbar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.closeSnakbar);
  };
}
