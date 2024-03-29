// mui
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// icons
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
// redux
import { useDispatch } from "react-redux";
// redux thunk function
import { ToggleSidebar } from "../redux/slices/app";
// component
import AntSwitch from "./AntSwitch";
// constants
import { faker } from "@faker-js/faker";

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
          }}
        >
          <Stack
            direction={"row"}
            sx={{ height: "100%", p: 2 }}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          {/* b1 */}
          <Stack
            alignItems={"center"}
            direction={"row"}
            spacing={2}
          >
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography
                variant="article"
                fontWeight={600}
              >
                {" "}
                {faker.name.fullName()}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
              >
                {`+91 9876 543 210`}
              </Typography>
            </Stack>
          </Stack>

          {/* b2 */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack
              spacing={1}
              alignItems={"center"}
            >
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack
              spacing={1}
              alignItems={"center"}
            >
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>

          <Divider />
          {/* b3 */}
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">
              The magic you looking for is in the work you'r avoiding
            </Typography>
          </Stack>

          <Divider />
          {/* b4 */}
          <Stack spacing={2}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2">Media, Links & Docs</Typography>
              {/* something new */}
              <Button endIcon={<CaretRight />}> 401 </Button>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
            >
              {[1, 2, 3].map((el) => (
                <Box key={el}>
                  <img
                    src={faker.image.food()}
                    alt={faker.name.fullName()}
                  />
                </Box>
              ))}
            </Stack>
          </Stack>

          <Divider />
          {/* b5 */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
            >
              <Star size={21} />
              <Typography variant="subtitle2">Starred Message</Typography>
            </Stack>
            <IconButton>
              <CaretRight />
            </IconButton>
          </Stack>

          <Divider />
          {/* b5 */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
            >
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notification</Typography>
            </Stack>
            <IconButton>
              <AntSwitch />
            </IconButton>
          </Stack>

          <Divider />
          <Typography
            variant=""
            sx={{}}
          >
            1 goup in common
          </Typography>

          {/* b6 */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={"start"}
          >
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.fullName()}
            />
            <Stack spacing={0.5}>
              <Typography
                variant="subtitle2"
                sx={{}}
              >
                The Bukkad gang
              </Typography>
              <Typography
                variant="caption"
                sx={{}}
              >
                Akash, Ayush, Om, You
              </Typography>
            </Stack>
          </Stack>

          {/* b7 */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={""}
          >
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Prohibit />}
            >
              Block
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Trash />}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
