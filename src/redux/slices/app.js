import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  users: [],
  friends: [],
  friendRequests: [],
  chat_type: null,
  room_id: null,
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
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.requests;
    },
    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },
  },
});

// exporting reducers
export default slice.reducer;

// --------------------------------------------------------------
// thunk action functions

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

export function FetchUser() {
  return async (dispatch, getState) => {
    await axios
      .get("/users/get-users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(slice.actions.updateUsers({ users: res.data.data }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function FetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get("/users/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(slice.actions.updateFriends({ friends: res.data.data }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function FetchFriendsRequests() {
  return async (dispatch, getState) => {
    await axios
      .get("/users/get-friend-requests", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(
          slice.actions.updateFriendRequests({ requests: res.data.data })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function SelectConversation({ room_id }) {
  return (dispatch, getState) => {
    dispatch(slice.actions.selectConversation({ room_id }));
  };
}
