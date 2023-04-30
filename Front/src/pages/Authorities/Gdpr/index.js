// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import { useEffect, useState } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "global/navbars/DefaultNavbar";
// Author page sections
// import Posts from "pages/LandingPages/Author/sections/Posts";
// import Contact from "pages/LandingPages/Author/sections/Contact";
import Markdown from "pages/LandingPages/Blog/components/markdown";
import { Grid } from "@mui/material";
// Images
import bgImage from "assets/images/parc-auto-blog.jpg";
import routes from "routes";
import text from "./components/gdpr.md";

function Gdpr() {
  const [gdprText, setGdprText] = useState([]);
  const getGdprs = async () => {
    const response = await fetch(text);
    const data = await response.text();
    setGdprText(data);
  };
  useEffect(() => {
    getGdprs();
  }, []);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/contract",
          label: "Generare Contract",
          color: "info",
        }}
        sticky
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -24,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKTypography variant="h3" mb={6}>
            Politica Gdpr-autocontract.ro
          </MKTypography>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <MKBox p={2}>
                <MKBox pt={0.5} pb={3} px={3}>
                  <Grid container>
                    {gdprText.length !== 0 && (
                      <Markdown className="markdown" key={text}>
                        {gdprText}
                      </Markdown>
                    )}
                  </Grid>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Card>
      </MKBox>
    </>
  );
}

export default Gdpr;
