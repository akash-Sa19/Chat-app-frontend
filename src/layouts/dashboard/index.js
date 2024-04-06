// mui
import { Stack } from "@mui/material";
// rrd
import { Outlet, Navigate } from "react-router-dom";
// component
import SideBar from "./SideBar";

// const isAuthenticated = true;

const DashboardLayout = () => {
  // if (!isAuthenticated) {
  //   return <Navigate to={"/auth/login"} />;
  // }
  return (
    <Stack direction={"row"}>
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
