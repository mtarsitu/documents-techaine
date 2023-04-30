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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/familie-fericita-cumparare-auto.jpg";
import post2 from "assets/images/samsarii-de-masini.jpg";
import post3 from "assets/images/vanzare-cumparare.jpg";
import post4 from "assets/images/contract-fata-vanzare.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Articole Auto-Completare Contracte
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Cum completezi un nou contract pe auto-completare-contract"
              description="Pentru a începe, trebuie să încărcați fotografiile buletinelor de identitate ale vânzătorului și cumpărătorului..."
              action={{
                type: "internal",
                route: "/blog",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Experiența rapidă și ușoară a contractului nostru de vânzare-cumpărare auto"
              description="Tranzacțiile auto pot fi adesea un proces complicat și consumator de timp, care implică adesea drumuri la birourile de acte sau agenții auto..."
              action={{
                type: "internal",
                route: "/blog",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Cumperi o mașină second hand?"
              description="Dacă vrei să cumperi o mașină second hand adusă dintr-o altă țară UE, atunci trebuie să știi că, începând cu această dată, samsarii de mașini..."
              action={{
                type: "internal",
                route: "/blog",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Ultimile stiri in materie de vanzari auto"
              description="Cautam in permanenta sa fim la zi cu tot ce se intampla."
              action={{
                type: "internal",
                route: "/blog",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
