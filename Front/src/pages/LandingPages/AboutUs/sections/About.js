// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function About() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              Mai multe despre noi
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={2}>
              Suntem o companie tânără și dinamică, specializată în dezvoltarea de tehnologii și
              soluții inovatoare pentru companiile care doresc să își eficientizeze procesele de
              afaceri și să economisească timp și bani. Vom pune mereu accentul pe calitate și
              precizie, pentru a oferi clienților noștri cele mai bune servicii posibile.
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              Serviciul nostru de completare automată a contractelor de vânzare auto este doar
              începutul. Suntem dedicați să oferim soluții complete și personalizate pentru orice
              fel de contract de afaceri, indiferent de complexitatea tranzacției sau numărul de
              documente implicate. La AutoContracte.ro, înțelegem importanța unui proces de afaceri
              bine organizat și eficient. De aceea, suntem mândri să oferim o soluție de onboarding
              pentru clienții companiei dvs. Această soluție permite încărcarea automată a datelor
              de identitate ale clienților, astfel încât procesul de înregistrare să fie completat
              rapid și cu precizie, fără erori sau întârzieri. Ne mândrim cu faptul că suntem
              parteneri tehnologici ai Techaine.com și împărtășim valori similare, precum inovația,
              tehnologia avansată și soluțiile personalizate. Prin această colaborare, suntem în
              măsură să oferim clienților noștri cele mai bune și mai avansate soluții de afaceri.
              La AutoContracte.ro, suntem dedicați să oferim soluții tehnologice avansate, de înaltă
              calitate și personalizate pentru a răspunde nevoilor și cerințelor clienților noștri.
              Contactați-ne astăzi pentru a afla mai multe despre serviciile noastre și pentru a
              începe să economisiți timp și bani prin utilizarea soluțiilor noastre inovatoare.
            </MKTypography>
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              techaine.com
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">mediation</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  Oferim consultanta si solutii
                  <br />
                  pentru auto completare contracte sau onboarding!
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">settings_overscan</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  Integrare cu orice tehnologie!
                  <br />
                  Pentru ca e important pentru noi sa nu schimbi mediul de lucru!
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">token</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  Cele mai mici costuri!
                  <br />
                  Incercam sa oferim tehnologii noi la costuri reduse!
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default About;
