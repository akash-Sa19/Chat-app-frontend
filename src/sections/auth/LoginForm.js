// react
import { useState } from "react";
// rhf
import FormProvider from "../../hook-form/FormProvider";
import { useForm } from "react-hook-form";
// rrd
import { Link as RouterLink } from "react-router-dom";
// schema builder
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// mui
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import RHFTextField from "../../hook-form/RHFTextField";
// icons
import { Eye, EyeSlash } from "phosphor-react";
// redux
import { useDispatch } from "react-redux";
// auth funtions
import { LoginUser } from "../../redux/slices/auth";

// --------------------------------------------------

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "1234",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // submit
      dispatch(LoginUser(data));
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <div>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <RHFTextField
            name={"email"}
            label="Email Address"
          />
          <RHFTextField
            name={"password"}
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          alignItems={"flex-end"}
          sx={{ my: 2 }}
        >
          <Link
            variant="body2"
            color={"inherit"}
            underline="always"
            to={"/auth/reset-password"}
            component={RouterLink}
          >
            Forgot Password?
          </Link>
        </Stack>
        <Button
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            "& : hover": {
              bgcolor: "text-primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
            width: "100%",
          }}
        >
          Login
        </Button>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
