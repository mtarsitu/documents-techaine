// import MuiLink from "@mui/material/Link";
import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Card } from "@mui/material";
import axios from "axios";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "global/navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/images/generare-contract.jpeg";
import LoadingSpinner from "components/Spinner/spinner";
import CompletedDoc from "./CompletedDoc";
// https://autocontract.azurewebsites.net/
function UserInputs({ files, setStep, step }) {
  const [seller, setSeller] = useState({});
  const [buyer, setBuyer] = useState({});
  const [auto, setAuto] = useState({});
  const [loading, setLoading] = useState(false);
  const upload = async (form) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://autocontract.azurewebsites.net/Documents/getResult",
        form
      );
      setBuyer(response.data.buyer);
      setSeller(response.data.seller);
      setAuto(response.data.auto);
      setTimeout(() => {
        setLoading(false);
      }, 100);
      setStep(step + 1);
    } catch (err) {
      console.warn(err);
    }
  };
  const setForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("sellerId", files.sellerCard[0]);
    formData.append("buyerId", files.buyerCard[0]);
    formData.append("autoId", files.autoCard[0]);
    upload(formData);
  };
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/",
          label: "Stop generare",
          color: "error",
        }}
        // transparent
        // light
      />
      {step === 2 ? (
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
              mt: -28,
              mb: 4,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            {!loading && (
              <>
                <MKTypography variant="h3" mb={4}>
                  Pasul 2
                </MKTypography>
                <MKTypography variant="h6" mb={4}>
                  Introdu pretul de vanzare al masinii ca sa il putem completa in contract!
                </MKTypography>
                <MKBox width="100%" component="form" method="post" mt={10} onSubmit={setForm}>
                  <Grid container spacing={3}>
                    {/* <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    variant="standard"
                    label="Email-ul vanzatorului (nu este necesar)"
                    name="sellerEmail"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Telefonul vanzatorului (nu este necesar)"
                    name="sellerPhone"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Codul postal al vanzatorului (nu este necesar)"
                    name="sellerPhone"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    variant="standard"
                    label="Email-ul cumparatorului (nu este necesar)"
                    name="sellerEmail"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Telefonul cumparatorului (nu este necesar)"
                    name="buyerPhone"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Codul postal al cumparatorului (nu este necesar)"
                    name="sellerPhone"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Numarul de inmatriculare"
                    name="plateNumber"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Cand expira ITP-ul (nu este necesar)"
                    name="itpExpire"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Cumparat cu? (nu este necesar)"
                    name="buyedWith"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Data dobandirii? (nu este necesar)"
                    name="buyedAt"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid> */}
                    <Grid container item justifyContent="center" xs={12} mt={2} mb={2}>
                      <MKBox width="80%">
                        <MKInput
                          color="info"
                          type="text"
                          label="*** Pretul masinii"
                          placeholder="In cifre, il transformam si in litere"
                          name="price"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </MKBox>
                    </Grid>
                  </Grid>
                  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                    <MKButton type="submit" variant="gradient" color="info">
                      Urmatorul pas
                    </MKButton>
                  </Grid>
                </MKBox>
              </>
            )}
            {loading && <LoadingSpinner />}
          </Card>
        </MKBox>
      ) : (
        <CompletedDoc
          seller={seller}
          buyer={buyer}
          auto={auto}
          setBuyer={setBuyer}
          setSeller={setSeller}
          setAuto={setAuto}
          step={step}
          setStep={setStep}
        />
      )}
    </>
  );
}

UserInputs.propTypes = {
  files: PropTypes.arrayOf(PropTypes.string, PropTypes.object).isRequired,
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

export default UserInputs;
