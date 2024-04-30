import { useState } from "react";
// mui
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// mui custom styled elements
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
// icons
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";

// constants
import { ChatList } from "../../data";

// other
import { SimpleBarStyle } from "../../components/Scrollbar";
// components
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";

const Chats = () => {
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "320px",
          backgroundColor:
            theme.palette.mode === "light"
              ? " #f8faff"
              : theme.palette.background.default,
          boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
        }}
      >
        <Stack
          p={3}
          spacing={2}
          sx={{ height: "100vh" }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Chats</Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
            >
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
              >
                <Users />
              </IconButton>
              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>
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

          <Stack spacing={1}>
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={1.5}
            >
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>

          <Stack
            direction={"column"}
            spacing={2}
            sx={{
              flexGrow: 1,
              overflowY: "scroll",
              height: "100%",
              // border: "solid red 1px",
            }}
          >
            <SimpleBarStyle
            // timeout={"500ms"}
            // clickOnTrack={false}
            >
              <Stack spacing={2.4}>
                <Typography
                  variant="subtitle2"
                  color={"#676767"}
                >
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return (
                    <ChatElement
                      {...el}
                      key={el.id}
                    />
                  );
                })}
              </Stack>
              <Stack spacing={2.4}>
                <Typography
                  variant="subtitle2"
                  color={"#676767"}
                  mt={2}
                >
                  All Chats
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends
          open={openDialog}
          handleClose={handleCloseDialog}
        />
      )}
    </>
  );
};
export default Chats;
