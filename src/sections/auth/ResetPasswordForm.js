// rhf
import FormProvider from "../../hook-form/FormProvider";
import { useForm } from "react-hook-form";

// schema builder
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// mui
import { Alert, Button, Stack } from "@mui/material";
import RHFTextField from "../../hook-form/RHFTextField";
// redux
import { useDispatch } from "react-redux";
import { ForgotPassword } from "../../redux/slices/auth";

// -------------------------------------
const RestPasswordForm = () => {
  const dispatch = useDispatch();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const defaultValues = {
    email: "demo@tawk.com",
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
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
      // data = {email: "aValidEmail"}
      // submit
      dispatch(ForgotPassword(data));
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
            Send Request
          </Button>
        </Stack>
      </FormProvider>
    </div>
  );
};

export default RestPasswordForm;
