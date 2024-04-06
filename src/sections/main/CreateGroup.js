// mui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
// react hooks
import { forwardRef } from "react";
// form schema handler
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// rhf
import { useForm } from "react-hook-form";
import RHFTextField from "../../hook-form/RHFTextField";
import FormProvider from "../../hook-form/FormProvider";
import RHFAutocomplete from "../../hook-form/RHFAutocomplete";

const MEMBERS = ["Akash", "Ayush", "Kashish"];

// todo: create reusable component
// sub-dialog transition
const Transition = forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  );
});

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have atleast two members"),
  });
  const defaultValues = {
    title: "",
    members: [],
  };
  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });
  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // API call
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={3}>
        <RHFTextField
          name="title"
          label="Title"
        />
        <RHFAutocomplete
          name="members"
          label={"Members"}
          multiple
          freeSolo
          options={MEMBERS.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"right"}
          spacing={2}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            variant="contained"
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};
const CreateGroup = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      //   onClose will dialog box close when we click outside the dialog box
      //  we only have to pass a function that closes the dialog box
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle sx={{ mb: 2 }}>{"Create New Group"}</DialogTitle>
      <DialogContent>
        {/* Form */}
        <CreateGroupForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
