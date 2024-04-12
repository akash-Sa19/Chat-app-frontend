import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

// exporting reduces
export default slice.reducer;

// Log-in
export function LoginUser(formValues) {
  // formValue => {email, password}
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/login",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(
          slice.actions.logIn({
            // actions
            isLoggedIn: true,
            token: res.data.token,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// logOut
export function LogoutUser() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.signOut());
  };
}

// forgotpassword
export function ForgotPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/forgot-password",
        { ...formValues },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
}

// newPassword
export function NewPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "./auth/reset-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(
          slice.actions.logIn({
            // actions
            isLoggedIn: true,
            token: res.data.token,
          })
        );
      })
      .catch((err) => console.log(err));
  };
}
