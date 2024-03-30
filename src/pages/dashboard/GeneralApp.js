// mui
import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// components
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
// redux
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  // const selector = useSelector(store => store.app)
  const { sidebar } = useSelector((store) => store.app);
  return (
    <Stack
      direction={"row"}
      sx={{ width: "100%" }}
    >
      {/* Chats */}
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
        {/* Conversation */}
        <Conversation />
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
