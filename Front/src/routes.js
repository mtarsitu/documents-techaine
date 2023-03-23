// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Blogs from "pages/LandingPages/Blog";
import SignIn from "layouts/pages/authentication/sign-in";
import SecondPricing from "pages/Pricing/secondPricing";
// import Presentation from "layouts/pages/presentation";

const routes = [
  // {
  //   name: "pagina principala",
  //   icon: <AddToHomeScreenIcon />,
  //   route: "/",
  //   component: <Presentation />,
  // },
  {
    name: "despre noi",
    icon: <Icon>face2</Icon>,
    route: "/despre-noi",
    component: <AboutUs />,
  },
  {
    name: "Costuri",
    icon: <Icon>payment</Icon>,
    route: "/pachete",
    component: <SecondPricing />,
  },
  {
    name: "contacteaza-ne",
    icon: <Icon>phone</Icon>,
    route: "/contact",
    component: <ContactUs />,
  },
  {
    name: "blog",
    icon: <Icon>newspaper</Icon>,
    route: "/blog",
    component: <Blogs />,
  },
  {
    name: "sign in",
    icon: <Icon>lockperson</Icon>,
    route: "/sign-in",
    component: <SignIn />,
  },
];

export default routes;
