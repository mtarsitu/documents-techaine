// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const year = new Date().getFullYear();
function Footer() {
  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <MKTypography variant="h6" textTransform="uppercase" mb={{ xs: 2, lg: 3 }}>
              autocontract.ro
            </MKTypography>
            <MKTypography variant="h6" textTransform="uppercase" mb={{ xs: 2, lg: 3 }}>
              direct advertising solution s.r.l.
            </MKTypography>
            <MKTypography variant="button" fontWeight="regular" opacity={0.8} mb={5}>
              Bucuresti Sec 3, Str NUCULUI, Nr. 6, Bloc V-101, Scara 2, Etaj 3, Ap. 41
              <br />
              Cod unic de inregistrare: 16685210
              <br />
              Reg. Comertului: J40/13289/17.08.2004
            </MKTypography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/#"
                >
                  Home
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/despre-noi"
                >
                  Despre noi
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/Blog"
                >
                  Blog
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/pachete"
                >
                  Costuri
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/politica-cookie"
                >
                  Cookie
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/politica-confidentialitate-gdpr"
                >
                  GDPR
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/termeni-si-conditii"
                >
                  Termeni si conditii
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://anpc.ro/"
                >
                  ANPC
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                >
                  SOL
                </MKTypography>
              </MKBox>
            </Stack>
            <MKTypography variant="button" opacity={0.8}>
              Copyright ©{year} &nbsp;AutoContract.ro
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: "center", lg: "right" }}>
            <MKTypography variant="body1" fontWeight="bold" mb={6} sx={{ fontSize: "1.125rem" }}>
              Contract de vanzare cumparare auto si nu numai completat inteligent. Oferim solutii
              pentru autocompletare contracte
            </MKTypography>
            <MKTypography
              component={Link}
              href="https://www.facebook.com/autocontract.ro"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-facebook" />
            </MKTypography>
            <MKTypography
              component={Link}
              href="https://www.instagram.com/autocontract.ro/"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-instagram" />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#tiktok"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-tiktok" />
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;
