// mui
import { Stack, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// components
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
// redux
import { useSelector } from "react-redux";
// assets
import NoChatSVG from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
  const theme = useTheme();
  // const selector = useSelector(store => store.app)
  const { sidebar, chat_type, room_id } = useSelector((store) => store.app);
  return (
    <Stack
      direction={"row"}
      sx={{ width: "100%" }}
    >
      {/* // ? component */}
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f0f4fa"
              : theme.palette.background.paper,
        }}
      >
        {/* component here */}
        {room_id !== null && chat_type === "individual" ? (
          // ? component
          <Conversation />
        ) : (
          <Stack
            spacing={2}
            sx={{ height: "100%", width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <NoChatSVG />
            <Typography variant="subtitle2">
              Select a conversation or start a new one
            </Typography>
          </Stack>
        )}
      </Box>
      {/* Contact */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessages />;
            case "SHARED":
              return <SharedMessages />;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
