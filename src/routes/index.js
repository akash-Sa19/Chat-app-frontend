import { Component, Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
// Component
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layouts/main";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          element: (
            <Navigate
              to={DEFAULT_PATH}
              replace
            />
          ),
          index: true,
        },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        { path: "group", element: <GroupPage /> },
        { path: "call", element: <CallPage /> },
        { path: "profile", element: <ProfilePage /> },

        { path: "404", element: <Page404 /> },
        {
          path: "*",
          element: (
            <Navigate
              to="/404"
              replace
            />
          ),
        },
      ],
    },
    {
      path: "/auth",
      element: <MainLayout />,
      children: [
        {
          element: <LoginPage />,
          path: "login",
        },
        {
          element: <RegisterPage />,
          path: "register",
        },
        {
          element: <ResetPasswordPage />,
          path: "reset-password",
        },
        {
          element: <NewPasswordPage />,
          path: "new-password",
        },
        {
          element: <VerifyPage />,
          path: "verify",
        },
      ],
    },
    {
      path: "*",
      element: (
        <Navigate
          to="/404"
          replace
        />
      ),
    },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const GroupPage = Loadable(lazy(() => import("../pages/dashboard/Group")));
const CallPage = Loadable(lazy(() => import("../pages/dashboard/Call")));
const ProfilePage = Loadable(lazy(() => import("../pages/dashboard/Profile")));

// auth pages
const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword"))
);
const VerifyPage = Loadable(lazy(() => import("../pages/auth/Verify")));
// 404 page
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
