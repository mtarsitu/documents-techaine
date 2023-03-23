import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const tiers = [
  {
    title: "One Time",
    price: "45",
    description: [
      "Scanare buletine vanzator si cumparator",
      "Verificare date extrase din buletine",
      "Auto-completare contract",
      "Descarcare directa si trimitere email",
    ],
    buttonText: "Cumpara",
    buttonVariant: "outlined",
  },
  {
    title: "Standard Plus",
    subheader: "Most popular",
    price: "150",
    description: [
      "80 pachete One Time",
      "Suport Email",
      "Auto-completare contract",
      "Descarcare directa si trimitere email",
    ],
    buttonText: "Cumpara",
    buttonVariant: "contained",
  },
  {
    title: "Standard Pro",
    price: "250",
    description: ["Generare 200 contracte", "Acces nelimitat", "Suport Email Prioritar", ""],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

function PricingContent() {
  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
      <CssBaseline />

      {/* Hero unit */}
      <Container disableGutters maxWidth="fullWidth" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ marginTop: 10 }}
        >
          Pachete
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Avem pachete speciale pentru birouri de acte auto și parcuri auto care generează contracte
          de vânzare-cumpărare auto în mod constant. Simplificăm procesul și economisim timp și
          bani. Contactați-ne pentru a afla mai multe!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="fullWidth" component="main" sx={{ marginBottom: 12 }}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === "Standard Plus" ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {tier.title !== "One Time" ? "€ " : "ron "}
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {tier.title !== "One Time" ? "/luna" : "/contract"}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} sx={{ color: "info" }}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
