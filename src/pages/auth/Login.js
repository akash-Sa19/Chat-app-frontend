// mui
import { Link, Stack, Typography } from "@mui/material";
// rrd
import { Link as RouterLink } from "react-router-dom";
// component
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{ mb: 5, position: "relative" }}
      >
        <Typography variant="h4">Login To Tawk</Typography>
        <Stack
          direction={"row"}
          spacing={0.5}
        >
          <Typography
            variant="body2"
            sx={{}}
          >
            New User?
          </Typography>
          <Link
            to={"/auth/register"}
            component={RouterLink}
            variant="subtitle2"
          >
            Create an account
          </Link>
        </Stack>

        {/* login form */}
        <LoginForm />

        {/* auth through social */}
        {/* component */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
