// react
import { useCallback, useState } from "react";
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

const ProfileForm = () => {
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    avatarUrl: Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

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
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={3}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <RHFTextField
            name={"name"}
            label="Name"
            helperText={"This name will be visible to your contacts"}
          />
          <RHFTextField
            name={"about"}
            label="About"
            multiline
            rows={3}
            maxRows={5}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"end"}
        >
          <Button
            variant="outlined"
            type="submit"
            color="primary"
            size="medium"
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
