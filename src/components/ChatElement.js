// mui
import { Badge, Box, Stack, Typography, Avatar } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
// styled component
import { StyledBadge } from "./StyledBadge";
// redux
import { useDispatch } from "react-redux";
import { SelectConversation } from "../redux/slices/app";

// ----------------------------------------------------------------------------

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      onClick={() => {
        dispatch(SelectConversation({ room_id: id }));
      }}
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? " #fff"
            : theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          spacing={2}
        >
          {online ? (
            <StyledBadge
              overlap="circular"
              variant="dot"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Avatar src={img} />
            </StyledBadge>
          ) : (
            <Avatar src={img} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>

        <Stack
          alignItems={"center"}
          spacing={2}
        >
          <Typography
            variant="caption"
            sx={{ fontWeight: 600 }}
          >
            {time}
          </Typography>
          <Badge
            color="primary"
            badgeContent={unread}
          ></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatElement;
