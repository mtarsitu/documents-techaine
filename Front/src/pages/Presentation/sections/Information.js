// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/contract-fata-vanzare.jpg";
import bgBack from "assets/images/contract.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Cat de
                    <br />
                    simplu este?
                  </>
                }
                description="Nu trebuie sa iti mai faci griji, contractul este cel oferit chiar de autoritati. In plus metoda noastra este cea mai eficienta de pe piata"
              />
              <RotatingCardBack
                image={bgBack}
                title="Genereaza acum contractul"
                description="O sa salvezi extrem de mult timp, fara sa mai alergi in traficul de zi cu zi sa ajungi la diferite birouri de acte"
                action={{
                  type: "internal",
                  route: "/contract",
                  label: "incepe acum",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Incarci documente"
                  description="Cu doar 3 apasari, sau click-uri asa cum vrei sa le denumesti, atasezi documentele necesare, buletinul vanzatorului si al cumparatorului, carte de identitate a masinii, si noi completam pentru tine contractul!"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Achiti"
                  description="Achiti taxa de numai 17.99 ron si in cateva secunde contractul este generat automat. Urmand sa alegi ce sa faci in continuare: editezi, email, printare sau descarcare?"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Contractul completat"
                  description="Ramane doar sa alegi ce vrei sa faci cu contractul tau de vanzare cumparare, il descarci,il printezi sau il trimiti pe email-ul tau cu doar o apasare de buton"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Verifici datele"
                  description="Verifici daca toate datele obtinute de noi prin technologia avansata numita OCR si noi generam contracul in mai putin de 10 secunde"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
