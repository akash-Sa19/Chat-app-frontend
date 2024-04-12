// react
import { useState } from "react";
// rhf
import FormProvider from "../../hook-form/FormProvider";
import { useForm } from "react-hook-form";
// rrd
import { Link as RouterLink, useSearchParams } from "react-router-dom";
// schema builder
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// mui
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Link,
} from "@mui/material";
import RHFTextField from "../../hook-form/RHFTextField";
// icons
import { Eye, EyeSlash } from "phosphor-react";
// redux
import { useDispatch } from "react-redux";
import { NewPassword } from "../../redux/slices/auth";

// ----------------------------------------------

const NewPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [queryParameters] = useSearchParams();

  const NewPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const defaultValues = {
    password: "",
    confirmPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
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
      dispatch(NewPassword({ ...data, token: queryParameters.get("token") }));
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
            name={"password"}
            label="New Password"
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
          <RHFTextField
            name={"confirmPassword"}
            label="Confirm Password"
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
            Submit
          </Button>
        </Stack>
      </FormProvider>
    </div>
  );
};

export default NewPasswordForm;
