/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={4}>
      <Container>
        <Grid container item xs={12} lg={14} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={1}
              suffix=" min"
              title="Generare Contract"
              description="De la buletine si cartea de identitate a masinii pana la un contract complet completat"
            />
          </Grid>
          <Grid item xs={12} md={3} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={100}
              suffix="%"
              title="Securizat"
              description="Nu retinem nici o informatie de la clientii nostrii. Cu atat mai putin pozele care ne sunt furnizate"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={100}
              suffix="%"
              title="Model autentic"
              description="Contractul pe care il vei primii de la noi este recunoscut atat de primarie cat si de DRPCIV"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={100}
              suffix="%"
              title="Model autentic"
              description="Contractul pe care il vei primii de la noi este recunoscut atat de primarie cat si de DRPCIV"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
