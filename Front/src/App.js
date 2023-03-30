import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import PresentationPage from "layouts/pages/presentation";
// import UploadDocumentsPages from "layouts/pages/upload";
// import RegisterPage from "layouts/pages/authentication/register";
import CookiesPage from "layouts/pages/authorities/cookie";
import TermsPage from "layouts/pages/authorities/terms";
import GdpPage from "layouts/pages/authorities/gdpr";
import Footer from "global/Footer";
// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<PresentationPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="/contract" element={<UploadDocumentsPages />} /> */}
        <Route path="/cumpara-pachete" />
        {/* <Route path="/inregistrare" element={<RegisterPage />} /> */}
        <Route path="/politica-cookie" element={<CookiesPage />} />
        <Route path="/politica-confidentialitate-gdpr" element={<GdpPage />} />
        <Route path="/termeni-si-conditii" element={<TermsPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
