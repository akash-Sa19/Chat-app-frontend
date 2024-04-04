// mui
import { Divider, IconButton, Stack } from "@mui/material";
// icons
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        spacing={2}
      >
        <IconButton onClick={() => {}}>
          <GoogleLogo color="#df3e30" />
        </IconButton>
        <IconButton
          onClick={() => {}}
          color="inherit"
        >
          <GithubLogo />
        </IconButton>
        <IconButton onClick={() => {}}>
          <TwitterLogo color="#1c9cea" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;
