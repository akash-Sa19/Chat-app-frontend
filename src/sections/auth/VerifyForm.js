// mui
import { Stack, Button } from "@mui/material";
// schema builder
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// react form handler
import { useForm } from "react-hook-form";
// form component
import FormProvider from "../../hook-form/FormProvider";
import RHFCodes from "../../hook-form/RHFCodes";
// redux
import { useDispatch, useSelector } from "react-redux";
import { VerifyEmail } from "../../redux/slices/auth";

// --------------------------------------------

const VerifyForm = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
  // email -> get it from store

  // for the otp we are using a simple approch
  // the otp is six character long, so we are creating six input tags
  const verifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required("code is required"),
    code2: Yup.string().required("code is required"),
    code3: Yup.string().required("code is required"),
    code4: Yup.string().required("code is required"),
    code5: Yup.string().required("code is required"),
    code6: Yup.string().required("code is required"),
  });

  const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(verifyCodeSchema),
    defaultValues,
  });

  const { handleSubmit, fromState } = methods;

  const onSubmit = async (data) => {
    try {
      // Send api request
      dispatch(
        VerifyEmail({
          otp: `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`,
          email,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={3}>
          <RHFCodes
            keyName="code"
            inputs={["code1", "code2", "code3", "code4", "code5", "code6"]}
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
            Verify
          </Button>
        </Stack>
      </FormProvider>
    </>
  );
};

export default VerifyForm;
