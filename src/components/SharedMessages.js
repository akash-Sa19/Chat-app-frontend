// mui
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// redux
import { useDispatch } from "react-redux";
// redux thunk function
import { UpdateSidebar } from "../redux/slices/app";
// icons
import { ArrowLeft } from "phosphor-react";
// react
import { useState } from "react";
// constants
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINK } from "../data";
// component
import { DocMsg, LinkMsg } from "./Conversation/MessageTypes";

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* header */}
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
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebar("CONTACT"));
              }}
            >
              <ArrowLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>

        {/* tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ px: 2, pt: 2 }}
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                // Media
                return (
                  <Grid
                    container
                    spacing={2}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((el) => (
                      <Grid
                        item
                        xs={4}
                        key={el}
                      >
                        <img
                          src={faker.image.avatar()}
                          alt={faker.name.fullName()}
                        />
                      </Grid>
                    ))}
                  </Grid>
                );
              case 1:
                // Links
                return SHARED_LINK.map((el) => <LinkMsg el={el} />);
              case 2:
                // Docs
                return SHARED_DOCS.map((el) => <DocMsg el={el} />);
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
