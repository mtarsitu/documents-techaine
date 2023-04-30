import { DropzoneArea } from "react-mui-dropzone";
import { Grid, Card, Divider } from "@mui/material";
// import MuiLink from "@mui/material/Link";
import { useState, useEffect } from "react";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "global/navbars/DefaultNavbar";
import ExempleContractCard from "examples/Cards/ExemplesCard";
import bgImage from "assets/images/generare-contract.jpeg";
import idImage from "assets/images/exemplu-buletin.jpg";
import carIdImage from "assets/images/exemplu-carte-auto.jpg";
import routes from "routes";
import UserInputs from "./UserInputs";

const UploadDocuments = () => {
  const [fullUploaded, setFullUploaded] = useState(true);
  const [files, setFiles] = useState({
    sellerCard: "",
    buyerCard: "",
    autoCard: "",
  });
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };

  const addSellerCard = (file) => {
    setFiles((prevFile) => ({
      ...prevFile,
      sellerCard: file,
    }));
  };
  const addBuyerCard = (file) => {
    setFiles((prevFile) => ({
      ...prevFile,
      buyerCard: file,
    }));
  };
  const addAutoCard = (file) => {
    setFiles((prevFile) => ({
      ...prevFile,
      autoCard: file,
    }));
  };
  console.log(fullUploaded);
  useEffect(() => {
    console.log(files.sellerCard, "aici");
    if (
      files.sellerCard.length === 0 ||
      files.buyerCard.length === 0 ||
      files.autoCard.length === 0
    ) {
      setFullUploaded(true);
    } else {
      setFullUploaded(true);
    }
  }, [files]);
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
      {step === 1 ? (
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
              Pasul 1 - Incarcare pozele domentelor.
            </MKTypography>
            <MKTypography variant="h6" mb={4}>
              Documentele nu trebuie incadrate perfect in poza, si nici sa fie drepte! Asigura-te ca
              tu poti citii datele din pozele pe care le trimiti, daca tu poti si noi putem sa o
              facem. Doar poze sunt acceptate momentan. Nu putem lucra cu pdf. Incarca pozele mai
              jos!
            </MKTypography>
            <Grid container justifyContent="center" xs={12} mt={2} mb={2} spacing={3}>
              <Grid item xs={12} lg={2} sx={{ mt: { xs: 3, lg: 0 } }} md={4}>
                <ExempleContractCard
                  image={idImage}
                  title="Exemplu model buletin acceptat"
                  description=""
                />
              </Grid>
              <Grid item xs={12} lg={2} sx={{ mt: { xs: 3, lg: 0 } }} md={4}>
                <ExempleContractCard
                  image={carIdImage}
                  title="Carte de identitate masina acceptata."
                  description=""
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} md={5} lg={4}>
                <DropzoneArea
                  previewText="Verificare:"
                  onChange={addSellerCard}
                  filesLimit={1}
                  acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                  maxFileSize={5000000}
                  dropzoneText="Incarca buletinul vanzatorului direct aici "
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DropzoneArea
                  previewText="Verificare:"
                  onChange={addBuyerCard}
                  filesLimit={1}
                  acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                  maxFileSize={5000000}
                  dropzoneText="Incarca buletinul cumparatorului direct aici "
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DropzoneArea
                  previewText="Verificare:"
                  onChange={addAutoCard}
                  filesLimit={1}
                  acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                  maxFileSize={5000000}
                  dropzoneText="Incarca cartea de identitate a masinii"
                />
              </Grid>
            </Grid>
            <Divider sx={{ my: 6 }} />
            <MKBox mt={2} mb={1}>
              <MKButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={nextStep}
                disabled={!fullUploaded}
              >
                scaneaza documente
              </MKButton>
            </MKBox>
          </Card>
        </MKBox>
      ) : (
        <UserInputs files={files} setStep={setStep} step={step} />
      )}
    </>
  );
};

export default UploadDocuments;
