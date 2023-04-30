// import MuiLink from "@mui/material/Link";
import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Card } from "@mui/material";
import axios from "axios";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import SignaturePad from "react-signature-canvas";
import bgImage from "assets/images/generare-contract.jpeg";
import backUrl from "assets/backUrl";
import LoadingSpinner from "components/Spinner/spinner";
import CompletedDoc from "./CompletedDoc";
// https://autocontract.azurewebsites.net/
function UserInputs({ files, setStep, step }) {
  const [seller, setSeller] = useState({});
  const [buyer, setBuyer] = useState({});
  const [auto, setAuto] = useState({});
  const [signatures, setSignatures] = useState({
    sellerSignature: null,
    buyerSignature: null,
  });
  const signWidth = window.innerWidth > 400 ? 0.25 * window.innerWidth : 0.7 * window.innerWidth;
  const [sellerSigPad, setSellerSigpad] = useState({});
  const [buyerSigPad, setBuyerSigpad] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };
  // reliableby  / admin
  // admin
  // Muie11muie???
  const upload = async (form) => {
    try {
      setLoading(true);
      const response = await axios.post(`${backUrl}Documents/getResult`, form);
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
  const trim = () => {
    setSignatures({
      sellerSignature: sellerSigPad.getTrimmedCanvas().toDataURL("image/png"),
      buyerSignature: buyerSigPad.getTrimmedCanvas().toDataURL("image/png"),
    });
  };
  const setForm = (e) => {
    e.preventDefault();
    trim();
    const formData = new FormData(e.currentTarget);
    formData.append("sellerId", files.sellerCard[0]);
    formData.append("buyerId", files.buyerCard[0]);
    formData.append("autoId", files.autoCard[0]);
    upload(formData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
                  Introduci manual datele pe care nu le putem gasii in documente
                </MKTypography>
                <MKBox width="100%" component="form" method="post" mt={10} onSubmit={setForm}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        type="email"
                        variant="standard"
                        label="Email-ul vanzatorului"
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
                    {/* <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label="Codul postal al vanzatorului (nu este necesar)"
                        name="sellerPhone"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid> */}
                    <Grid item xs={12} md={6}>
                      <MKInput
                        type="email"
                        variant="standard"
                        label="Email-ul cumparatorului"
                        name="buyerEmail"
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
                    {/* <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label="Codul postal al cumparatorului (nu este necesar)"
                        name="sellerPhone"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid> */}
                    <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label="Numarul de inmatriculare"
                        name="plateNumber"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label="Cand expira ITP-ul (nu este necesar)"
                        name="itpExpire"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid> */}
                    {/* <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label="Cumparat cu? (nu este necesar)"
                        name="buyedWith"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid> */}
                    {/* <Grid item xs={12} md={6}>
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
                          placeholder="In cifre, il transformam noi pentru tine si in litere"
                          name="price"
                          InputLabelProps={{ shrink: true }}
                          onChange={onChange}
                          fullWidth
                        />
                      </MKBox>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center" xs={12} mt={2} mb={2}>
                    <Grid item xs={12} md={4}>
                      <MKTypography variant="p" mb={4} sx={{ fontSize: 15 }}>
                        Semnatura Vanzatorului
                      </MKTypography>
                      <MKTypography variant="p" mb={4} sx={{ fontSize: 10 }}>
                        &nbsp; (poti semna si fizic dupa printare)
                      </MKTypography>
                      <MKBox
                        sx={{
                          border: 1,
                          borderColor: "grey.500",
                          width: signWidth,
                          height: 200,
                        }}
                      >
                        <SignaturePad
                          canvasProps={{
                            width: signWidth,
                            height: 200,
                            className: "sigCanvas",
                          }}
                          ref={(ref) => {
                            setSellerSigpad(ref);
                          }}
                        />
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <MKTypography variant="p" mb={4} sx={{ fontSize: 15 }}>
                        Semnatura Cumparatorului
                      </MKTypography>
                      <MKTypography variant="p" mb={4} sx={{ fontSize: 10 }}>
                        &nbsp; (poti semna si fizic dupa printare)
                      </MKTypography>
                      <MKBox
                        sx={{
                          border: 1,
                          borderColor: "grey.500",
                          width: signWidth,
                          height: 200,
                        }}
                      >
                        <SignaturePad
                          canvasProps={{
                            width: signWidth,
                            height: 200,
                            className: "sigCanvas",
                          }}
                          ref={(ref) => {
                            setBuyerSigpad(ref);
                          }}
                        />
                      </MKBox>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                    mt={5}
                    mb={2}
                  >
                    <MKButton type="submit" variant="gradient" color="info">
                      Urmatorul pas
                    </MKButton>
                  </Grid>
                </MKBox>
              </>
            )}
            {loading && (
              <LoadingSpinner message="Scanarea documentelor este in procesare te rugam sa nu improspatezi pagina!" />
            )}
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
          signatures={signatures}
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
