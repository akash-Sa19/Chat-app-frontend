import { Stack, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { CaretLeft } from "phosphor-react";
import Button from "@mui/material/Button";
import ProfileForm from "../../sections/settings/ProfileFrom";

const Profile = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{ width: "100%" }}
      >
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
            p={4}
            spacing={5}
          >
            <Stack
              direction={"row"}
              spacing={3}
              alignItems={"center"}
            >
              <IconButton onClick={() => {}}>
                <CaretLeft
                  size={"24px"}
                  color="#4b4b4b"
                />
              </IconButton>
              <Typography variant="h5">Profile</Typography>
            </Stack>

            {/* profile from */}
            <ProfileForm />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
