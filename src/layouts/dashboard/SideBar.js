// react
import { useState } from "react";
// mui
import { useTheme, styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Switch,
  Menu,
  MenuItem,
} from "@mui/material";
// assets
import Logo from "../../assets/Images/logo.ico";
import { Gear, DotsThreeVertical } from "phosphor-react";
// constants
import { Nav_Buttons, Profile_Menu } from "../../data";
import { faker } from "@faker-js/faker";
// cutom hooks
import useSettings from "../../hooks/useSettings";
// rrd
import { useNavigate } from "react-router-dom";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
        height: "100vh",
        width: 100,
      }}
      padding={2}
    >
      <Stack
        sx={{ height: "100%" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={3}
      >
        <Stack
          alignItems={"center"}
          spacing={4}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              // but this are in px, How?? don't know
              height: 64,
              width: 64,
              // this 1.5 * 8 = 12px
              borderRadius: 1.5,
              // borderRadius: "12px",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
            />
          </Box>
          <Stack
            spacing={3}
            sx={{ width: "max-content" }}
            direction={"column"}
            alignItems={"center"}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  key={el.index}
                  onClick={() => {
                    setSelected(el.index);
                    navigate(el.path);
                  }}
                  sx={{ width: "max-content", color: "#000" }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            {/* divider can only be ued inside Grid and Stack */}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ color: "#FFF" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                  navigate("/settings");
                }}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          ></AntSwitch>
          <Avatar
            src={faker.image.avatar()}
            size={20}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{
              marginLeft: 1.5,
            }}
          >
            <Stack
              spacing={1}
              px={1}
            >
              {Profile_Menu.map((el) => (
                <MenuItem
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <Stack
                    onClick={() => {
                      navigate(el.path);
                    }}
                    sx={{ width: 100 }}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

const MessageOptions = () => {
  return (
    <>
      <DotsThreeVertical />
    </>
  );
};

export default SideBar;
