// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ThemeSettings from "./components/settings";
// mui
import { Alert, Snackbar } from "@mui/material";
// redux
import { useDispatch, useSelector } from "react-redux";
import { closeSnakbar } from "./redux/slices/app";
import { forwardRef } from "react";

const vertical = "bottom";
const horizontal = "center";

// const Alert = forwardRef(function Alert(props, ref) {
//   return (
//     <MuiAlert
//       elevation={6}
//       ref={ref}
//       variation="filled"
//       {...props}
//     />
//   );
// });

function App() {
  const { open, message, severity } = useSelector(
    (state) => state.app.snackbar
  );

  console.log({ open: open, message: message, severity: severity });
  const dispatch = useDispatch();
  return (
    <>
      <ThemeProvider>
        <ThemeSettings>
          <Router />
        </ThemeSettings>
      </ThemeProvider>

      {message && open ? (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          key={vertical + horizontal}
          onClose={() => {
            //
            dispatch(closeSnakbar());
          }}
        >
          <Alert
            onClose={() => {
              dispatch(closeSnakbar());
            }}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
