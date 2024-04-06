// react
import { useState } from "react";
// mui
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
// search Component
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
// icons
import { MagnifyingGlass, Plus } from "phosphor-react";
// compoents
import { CallLogElement } from "../../components/CallElement";
// constants
import { callLogs } from "../../data";
// dialog box
import StartCall from "../../sections/main/StartCall";

const ScrollingElement = styled(Box)(() => ({
  overflow: "auto",
  scrollbarWidth: "none", // Hide the scrollbar for Firefox
  "&::-webkit-scrollbar": {
    display: "block", // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
  },
}));
const Call = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Stack direction={"row"}>
        {/* Left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
            width: "320px",
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack
            direction={"column"}
            sx={{ maxHeight: "100vh" }}
            spacing={2}
            p={3}
          >
            <Stack>
              <Typography variant="h5">Groups</Typography>
            </Stack>

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

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="subtitle2"
                sx={{}}
                component={Link}
              >
                Start New Conversation
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>

            <Divider />

            {/* Call Log */}
            <ScrollingElement>
              <Stack spacing={2}>
                {callLogs.map((el) => (
                  <CallLogElement
                    {...el}
                    key={el.id}
                  />
                ))}
              </Stack>
            </ScrollingElement>
          </Stack>
        </Box>

        {/* right */}
        {/* todo +> reuse Conversation components */}
      </Stack>
      {openDialog && (
        <StartCall
          open={openDialog}
          handleClose={handleCloseDialog}
        />
      )}
    </>
  );
};

export default Call;
