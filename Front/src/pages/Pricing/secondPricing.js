import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultNavbar from "global/navbars/DefaultNavbar";
// Author page sections
// import Posts from "pages/LandingPages/Author/sections/Posts";
// import Contact from "pages/LandingPages/Author/sections/Contact";

// Images
import bgImage from "assets/images/vanzare-cumparare.jpg";
import logo from "assets/images/autocontract-logo-orizontal.png";
import routes from "routes";
import PricingCard from "./pricingCard";

const tiers = [
  {
    title: "Personal",
    price: "3.90",
    description: [
      "1 Contract autocompletat",
      "Scanare buletine vanzator si cumparator",
      "Scanare carte de identitate masina",
      "Verificare date extrase din buletine",
      "Verificare date extrase din cartea masinii",
      "Descarcare directa si trimitere email",
    ],
    buttonText: "Cumpara",
    buttonVariant: "outlined",
  },
  {
    title: "Profi",
    subheader: "Most popular",
    price: "100",
    description: [
      "50 Contracte autocompletate",
      "Scanare buletine vanzator si cumparator",
      "Scanare carte de identitate masina",
      "Verificare date extrase din buletine",
      "Verificare date extrase din cartea masinii",
      "Descarcare directa si trimitere email",
      "Suport Email",
    ],
    buttonText: "Cumpara",
    buttonVariant: "contained",
  },
  {
    title: "Profi plus",
    price: "200",
    description: [
      "120 Contracte autocompletate",
      "Acces nelimitat",
      "Scanare buletine vanzator si cumparator",
      "Scanare carte de identitate masina",
      "Verificare date extrase din buletine",
      "Verificare date extrase din cartea masinii",
      "Descarcare directa si trimitere email",
      "Suport Email Prioritar",
      "",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

function SecondPricing() {
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
            mt: -30,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Grid container justifyContent="center" sx={{ mt: -6 }}>
            <MKBox
              minHeight="15rem"
              width="20%"
              sx={{
                backgroundImage: ({
                  functions: { linearGradient, rgba },
                  palette: { gradients },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0),
                    rgba(gradients.dark.state, 0)
                  )}, url(${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",
                placeItems: "center",
              }}
            />
          </Grid>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} lg={4}>
              <PricingCard
                variant="contained"
                color="dark"
                price={tiers[0].price}
                title={tiers[0].title}
                icon="info"
                description={tiers[0].description}
                action={{
                  type: "internal",
                  route: "/cumpara-pachete",
                  color: "info",
                  label: "cumpara acum",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <PricingCard
                variant="outlined"
                color="info"
                price={tiers[1].price}
                title={tiers[1].title}
                icon="info"
                name="Stefan Toader"
                description={tiers[1].description}
                action={{
                  type: "internal",
                  route: "/cumpara-pachete",
                  color: "white",
                  label: "cumpara acum",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <PricingCard
                variant="contained"
                color="dark"
                price={tiers[2].price}
                title={tiers[2].title}
                icon="info"
                description={tiers[2].description}
                action={{
                  type: "internal",
                  route: "/cumpara-pachete",
                  color: "info",
                  label: "cumpara acum",
                }}
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 6 }} />
        </Card>
      </MKBox>
    </>
  );
}

export default SecondPricing;
