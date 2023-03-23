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
              description="De la pozele buletinelor și a cartii de identitate a mașinii până la un contract complet completat, procesul nostru de completare automată a contractelor este rapid și simplu"
            />
          </Grid>
          <Grid item xs={12} md={3} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={100}
              suffix="%"
              title="Securizat"
              description="La AutoContracte.ro, protejarea informațiilor clienților noștri este o prioritate absolută. Nu reținem nicio informație furnizată de clienții noștri, nici măcar fotografiile încărcate pentru a completa contractele."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={100}
              suffix="%"
              title="Model autentic"
              description="Contractul de vânzare auto pe care îl veți primi de la AutoContracte.ro este un document recunoscut oficial atât de Primărie, cât și de Poliția Rutieră și Direcția Regim Permise de Conducere și Înmatriculare a Vehiculelor (DRPCIV)."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={100}
              suffix="%"
              title="Confidentialitate"
              description="Respectăm dreptul la confidențialitate al clienților noștri și asigurăm un mediu sigur și protejat pentru tranzacțiile lor. Puteți avea încredere că informațiile dvs. sunt în siguranță cu noi și că sunt utilizate numai în scopul de a completa contractul de vânzare auto."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
