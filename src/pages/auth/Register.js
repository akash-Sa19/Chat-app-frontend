// mui
import { Link, Stack, Typography } from "@mui/material";
// rrd
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

const Register = () => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{ mb: 5, position: "relative" }}
      >
        <Typography variant="h4">Get Started with Tawk</Typography>

        <Stack
          direction={"row"}
          spacing={0.5}
        >
          <Typography variant="body2">Already have an account?</Typography>

          <Link
            to={"/auth/login"}
            component={RouterLink}
            variant="subtitle2"
          >
            Login
          </Link>
        </Stack>
        {/* register form */}
        <RegisterForm />

        {/*    */}
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By signining up, I agree to "}
          <Link
            underline="always"
            color="text.primary"
          >
            Terms of Service
          </Link>
          {" and "}
          <Link
            underline="always"
            color="text.primary"
          >
            Privacy Policy
          </Link>
        </Typography>

        <AuthSocial />
      </Stack>
    </>
  );
};

export default Register;
