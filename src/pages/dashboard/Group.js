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

// icons
import { MagnifyingGlass, Plus } from "phosphor-react";
// search Component
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";
import { useState } from "react";

const ScrollingElement = styled(Box)(({ theme }) => ({
  overflow: "auto",
  scrollbarWidth: "none", // Hide the scrollbar for Firefox
  "&::-webkit-scrollbar": {
    display: "block", // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
  },
}));

const Group = () => {
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
                Create New Group
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

            <ScrollingElement>
              <Stack
                spacing={2.4}
                // sx={{ overflowY: "scroll" }}
              >
                <Typography
                  variant="subtitle2"
                  color={"#676767"}
                >
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
              <Stack
                spacing={2.4}
                // sx={{ overflowY: "scroll" }}
              >
                <Typography
                  variant="subtitle2"
                  color={"#676767"}
                  mt={2}
                >
                  All Groups
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
            </ScrollingElement>
          </Stack>
        </Box>

        {/* right */}
        {/* todo +> reuse Conversation components */}
      </Stack>
      {openDialog && (
        <CreateGroup
          open={openDialog}
          handleClose={handleCloseDialog}
        />
      )}
    </>
  );
};

export default Group;
