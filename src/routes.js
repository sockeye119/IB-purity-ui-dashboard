// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import { A1 } from "Pages/PagesA/A1";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "Dashboard",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "Dashboard",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "RTL",
    icon: <SupportIcon color="inherit" />,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/Pages/PagesA/A1",
    name: "Pages/PagesA/A1",
    rtlName: "Pages/PagesA/A1",
    icon: <SupportIcon color="inherit" />,
    component: A1,
    layout: "/admin",
  },

  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "Pages",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "Dashboard",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "Dashboard",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "Dashboard",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];

export default dashRoutes;
