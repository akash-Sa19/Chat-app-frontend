import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { showSnackbar } from "./app";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: "",
  email: "",
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoaging;
    },
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
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
        dispatch(
          showSnackbar({ severity: "success", message: res.data.message })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(showSnackbar({ severity: "error", message: err.message }));
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

export function RegisterUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        "/auth/register",
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
          slice.actions.updateRegisterEmail({ email: formValues.email })
        );
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: false })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: true })
        );
      })
      .finally(() => {
        if (!getState().auth.error) {
          // we are not using any hook's or functional component because,
          // it (navigate) can only be used inside a funct Component which this is not
          // window.location.href = "/auth/verify";
        }
      });
  };
}

export function VerifyEmail(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/verify-otp",
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
          slice.actions.logIn({ isLoggedIn: true, token: res.data.token })
        );
      })
      .catch((error) => console.log(error));
  };
}
