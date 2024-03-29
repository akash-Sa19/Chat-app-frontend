import { Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MessageOptions } from "./MessageTypes";

const TextMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
      m={1}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : "#fff"}
        >
          {el.message}
        </Typography>
      </Box>
      {/* message option  */}
      <MessageOptions />
    </Stack>
  );
};
