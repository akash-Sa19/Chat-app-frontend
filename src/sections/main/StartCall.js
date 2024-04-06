// react
import { forwardRef } from "react";
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
// search Component
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";

import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { MembersList } from "../../data";

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

const StartCall = ({ open, handleClose }) => {
  return (
    <>
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
        <DialogTitle sx={{ mb: 2 }}>{"Start New Call"}</DialogTitle>
        <DialogContent>
          {/* Form */}
          <Stack spacing={2}>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709ce6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            {/* Call stack */}
            {MembersList.map((el) => (
              <CallElement {...el} />
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StartCall;
