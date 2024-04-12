// mui
import { Stack } from "@mui/material";
// rrd
import { Outlet, Navigate } from "react-router-dom";
// component
import SideBar from "./SideBar";
// redux
import { useSelector } from "react-redux";

// --------------------------------------------------

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <Stack direction={"row"}>
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
