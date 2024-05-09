import { useEffect, useState } from "react";
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
// socket.io
import { socket } from "../../socket";
// other
import { SimpleBarStyle } from "../../components/Scrollbar";
// components
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";
// redux
import { useSelector, useDispatch } from "react-redux";
import { FetchDirectConversation } from "../../redux/slices/conversation";

// ----------------------------------------------------------------

const Chats = () => {
  // for Front-end
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // for Back-end
  const dispatch = useDispatch();
  const user_id = window.localStorage.getItem("user_id");
  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      console.log("pages/dashboard/chats/line59 -> ", data);
      // data => list of conversations
      // console.log(data);
      dispatch(FetchDirectConversation({ conversations: data }));
    });
  }, []);

  const { conversations } = useSelector(
    (state) => state.conversation.direct_chat
  );
  // console.log(conversations);

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
                {conversations
                  .filter((el) => el.pinned)
                  .map((el) => {
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
                {conversations
                  .filter((el) => !el.pinned)
                  .map((el) => {
                    return (
                      <ChatElement
                        {...el}
                        key={el.id}
                      />
                    );
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
