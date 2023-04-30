import { Card, Grid } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKAlert from "components/MKAlert/index";
import backUrl from "assets/backUrl";
import LoadingSpinner from "components/Spinner/spinner";
import axios from "axios";

function Payment({ setWaterMarked, setPaymentPage }) {
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState("");
  const [alertsMessage, setAlertsMessage] = useState("");
  const uploadNewCustomer = async (form) => {
    setLoading(true);
    try {
      const response = await axios.post(`${backUrl}Stripe/customer/add`, form);
      console.log(response);
      if (response.status === 200) {
        const paymentResponse = await axios.post(`${backUrl}Stripe/payment/add`, {
          customerId: response.data.customerId,
          receiptEmail: response.data.email,
          description: "AutoCompletare contract de vanzare-cumparare auto!",
          currency: "RON",
          amount: 2799,
        });
        if (paymentResponse.status === 200) {
          setWaterMarked(false);
          setPaymentPage(false);
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      setAlerts(true);
      setAlertsMessage("O eroare!");
    }
  };
  const setForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("creditCard.Name", formData.get("name"));
    uploadNewCustomer(formData);
  };
  return (
    <>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -28,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKTypography variant="h3" mb={4}>
          Multumim ca ne-ai ales! Plateste in siguranta!
        </MKTypography>
        {/* <MKTypography variant="h6" mb={4}>
          Acesta este contractul tau de vanzare-cumparare. Speram ca totul este ok, in cazul in care
          ceva nu este in regula te rugam sa faci o poza si sa ne contactezi!
        </MKTypography> */}
        {alerts && alertsMessage.length > 0 && <MKAlert color="error" />}
        <MKBox width="100%" component="form" method="post" mt={10} onSubmit={setForm}>
          {!loading ? (
            <Grid container justifyContent="center" xs={12} mt={5} mb={2} spacing={3}>
              <Grid item xs={12} md={6}>
                <MKBox mb={2}>
                  <MKInput
                    type="email"
                    label="Email"
                    name="email"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </MKBox>
                <MKBox mb={2}>
                  <MKInput label="Nume" name="name" InputLabelProps={{ shrink: true }} fullWidth />
                </MKBox>
                <MKBox mb={2}>
                  <MKInput
                    label="Numarul cardului"
                    name="creditCard.CardNumber"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </MKBox>
                <Grid container justifyContent="center" spacing={3} mt={5} mb={2}>
                  <MKBox mb={2} mr={3}>
                    <MKInput
                      label="Anul expirarii cardului"
                      name="creditCard.ExpirationYear"
                      InputLabelProps={{ shrink: true }}
                    />
                  </MKBox>
                  <MKBox mb={2} mr={3}>
                    <MKInput
                      label="Luna expirarii cardului"
                      name="creditCard.ExpirationMonth"
                      InputLabelProps={{ shrink: true }}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      label="CVC - codul din 3 cifre"
                      name="creditCard.Cvc"
                      InputLabelProps={{ shrink: true }}
                    />
                  </MKBox>
                </Grid>

                <MKButton type="submit" variant="gradient" color="info" mt={5}>
                  Plateste acum
                </MKButton>
              </Grid>
            </Grid>
          ) : (
            <LoadingSpinner message="Plata in procesare! Te rugam sa astepti!" />
          )}
        </MKBox>
      </Card>
    </>
  );
}

Payment.propTypes = {
  setWaterMarked: PropTypes.func.isRequired,
  setPaymentPage: PropTypes.func.isRequired,
};
export default Payment;
