// react
import { useState } from "react";
// form component
import FormProvider from "../../hook-form/FormProvider";
import RHFTextField from "../../hook-form/RHFTextField";
// rhf
import { useForm } from "react-hook-form";
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
// icons
import { Eye, EyeSlash } from "phosphor-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Lastname is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "demo@tawk.com",
    password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {};
  try {
    // submit
  } catch (error) {
    console.log(error);
    reset();
    setError("afterSubmit", {
      ...error,
      message: error.message,
    });
  }

  return (
    <>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
          >
            <RHFTextField
              name={"firstName"}
              label={"First Name"}
            />
            <RHFTextField
              name={"lastName"}
              label={"Last Name"}
            />
          </Stack>
          <RHFTextField
            name={"email"}
            label={"Email"}
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
        </Stack>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
