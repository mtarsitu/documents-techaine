// import MuiLink from "@mui/material/Link";
import * as React from "react";
import { Grid, Card } from "@mui/material";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "global/navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/images/generare-contract.jpeg";
import { useEffect } from "react";
import EditedCompletedDoc from "./EditedCompletedDoc";

function EditData({
  seller,
  buyer,
  auto,
  setBuyer,
  setSeller,
  setAuto,
  step,
  setStep,
  signatures,
  coin,
}) {
  const buyerId = buyer.id;
  const sellerId = seller.id;
  const autoId = auto.id;
  const handleBuyerChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: { ...buyer[e.target.name], value: e.target.value } });
  };
  const handleSellerChange = (e) => {
    setSeller({ ...seller, [e.target.name]: { ...seller[e.target.name], value: e.target.value } });
  };
  const handleAutoChange = (e) => {
    setAuto({ ...auto, [e.target.name]: { ...auto[e.target.name], value: e.target.value } });
  };

  const handleSubmit = () => {
    setStep(step + 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      {step === 4 ? (
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
            <MKTypography variant="h3" mb={4}>
              Pasul 4
            </MKTypography>
            <MKTypography variant="h6" mb={4}>
              Editezi sau completezi datele in cazul in care crezi ca datele oferite de noi nu sunt
              suficiente
            </MKTypography>
            <MKBox width="100%" component="form" method="post" mt={10} onSubmit={handleSubmit}>
              <MKBox>
                <MKTypography variant="h7" mb={4}>
                  Vanzator
                </MKTypography>
              </MKBox>
              <Grid container spacing={3}>
                {Object.entries(seller).map((detail) =>
                  detail[0] !== "id" ? (
                    <Grid item xs={12} md={6} key={sellerId + detail[0]}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label={detail[0]}
                        defaultValue={detail[1].value}
                        name={detail[0]}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        onChange={handleSellerChange}
                        warning={detail[1].confidence < 0.7}
                      />
                    </Grid>
                  ) : (
                    <></>
                  )
                )}
              </Grid>
              <MKBox mt={4} mb={4}>
                <MKTypography variant="h7" mb={4}>
                  Cumparator
                </MKTypography>
              </MKBox>
              <Grid container spacing={3}>
                {Object.entries(buyer).map((detail) =>
                  detail[0] !== "id" ? (
                    <Grid item xs={12} md={6} key={buyerId + detail[0]}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label={detail[0]}
                        defaultValue={detail[1].value}
                        name={detail[0]}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        onChange={handleBuyerChange}
                        warning={detail[1].confidence < 0.7}
                      />
                    </Grid>
                  ) : (
                    <></>
                  )
                )}
              </Grid>
              <MKBox mt={4} mb={4}>
                <MKTypography variant="h7" mb={4}>
                  Autoturism
                </MKTypography>
              </MKBox>
              <Grid container spacing={3}>
                {Object.entries(auto).map((detail) =>
                  detail[0] !== "id" ? (
                    <Grid item xs={12} md={6} key={autoId + detail[0]}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label={detail[0]}
                        defaultValue={detail[1].value}
                        name={detail[0]}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        onChange={handleAutoChange}
                        warning={detail[1].confidence < 0.7}
                      />
                    </Grid>
                  ) : (
                    <></>
                  )
                )}
              </Grid>
              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                <MKButton type="submit" variant="gradient" color="info">
                  Re-completeaza contractul cu noile date
                </MKButton>
              </Grid>
            </MKBox>
          </Card>
        </MKBox>
      ) : (
        <EditedCompletedDoc
          seller={seller}
          buyer={buyer}
          auto={auto}
          signatures={signatures}
          coin={coin}
        />
      )}
    </>
  );
}

EditData.propTypes = {
  buyer: PropTypes.object.isRequired,
  seller: PropTypes.object.isRequired,
  auto: PropTypes.object.isRequired,
  setBuyer: PropTypes.func.isRequired,
  setSeller: PropTypes.func.isRequired,
  setAuto: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  signatures: PropTypes.object.isRequired,
  coin: PropTypes.string.isRequired,
};

export default EditData;
