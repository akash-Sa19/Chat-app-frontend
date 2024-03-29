// mui
import { Stack } from "@mui/material";
// rrd
import { Outlet } from "react-router-dom";
// component
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
