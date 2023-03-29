// import { useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Card, Grid } from "@mui/material";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import axios from "axios";
import DefaultNavbar from "global/navbars/DefaultNavbar";
import { triggerBase64Download } from "common-base64-downloader-react";
import { useEffect, useState } from "react";
import routes from "routes";
import bgImage from "assets/images/generare-contract.jpeg";
import GetContractCompleted from "./getContractCompleted";
import { ToBase64 } from "./pdfHelpers";
import EditData from "./EditData";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CompletedDoc({ seller, buyer, auto, setSeller, setBuyer, setAuto, step, setStep }) {
  const [pdfBytes, setPdfBytes] = useState();
  const [base64PDF, setBase64Pdf] = useState();
  // const [emailPdf, setEmailPdf] = useState();
  const handlePrint = () => {
    const win = window.open();
    win.document.write(
      `<iframe src="${base64PDF}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'`
    );
    win.document.close();
  };
  const handleEdit = () => {
    setStep(step + 1);
  };
  const handleSendEmail = async () => {
    const contract = new Blob([pdfBytes], { type: "application/pdf" });
    console.log(pdfBytes);
    const formData = new FormData();
    formData.append("sellerEmail", seller.email.value);
    formData.append("buyerEmail", buyer.email.value);
    formData.append(
      "pdf",
      contract,
      `contract vanzare cumparare ${auto.mark.value}-${auto.year.value}`
    );

    try {
      const response = await axios.post("http://localhost:5204/Email/sendPdfEmail", formData);
      console.log(response);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    GetContractCompleted(seller, buyer, auto).then((result) => {
      setPdfBytes(result);
      // setEmailPdf(Array.from(result));
      ToBase64(result).then((response) => {
        setBase64Pdf(`data:application/pdf;base64,${response}`);
      });
    });
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
      {step === 3 ? (
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
              Multumim ca ne-ai ales! A mai ramas sa alegi ce vrei sa faci cu el!
            </MKTypography>
            <MKTypography variant="h6" mb={4}>
              Acesta este contractul tau de vanzare-cumparare. Speram ca totul este ok, in cazul in
              care ceva nu este in regula te rugam sa faci o poza si sa ne contactezi!
            </MKTypography>
            <Grid container spacing={3}>
              {base64PDF && (
                <>
                  <Grid container justifyContent="center" xs={12} mt={5} mb={2} spacing={3}>
                    <Grid item>
                      <MKButton
                        variant="gradient"
                        color="info"
                        onClick={() =>
                          triggerBase64Download(
                            base64PDF,
                            `contract-vanzare-cumparare-${auto.mark.value}-${auto.model.value}-${auto.year.value}`
                          )
                        }
                      >
                        Descarca
                      </MKButton>
                    </Grid>
                    <Grid item>
                      <MKButton variant="gradient" color="info" onClick={handlePrint}>
                        Printeaza
                      </MKButton>
                    </Grid>
                    <Grid item>
                      <MKButton variant="gradient" color="info" onClick={handleEdit}>
                        Editeaza date
                      </MKButton>
                    </Grid>
                    <Grid item>
                      <MKButton variant="gradient" color="info" onClick={handleSendEmail}>
                        Trimite pe email
                      </MKButton>
                    </Grid>
                  </Grid>
                </>
              )}
              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                {pdfBytes && (
                  <Document
                    file={{ data: pdfBytes }}
                    onLoadSuccess={() => console.log("SUCCESS LOAD")}
                  >
                    <Page pageNumber={1} />
                  </Document>
                )}
              </Grid>
            </Grid>
          </Card>
        </MKBox>
      ) : (
        <EditData
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

CompletedDoc.propTypes = {
  buyer: PropTypes.object.isRequired,
  seller: PropTypes.object.isRequired,
  auto: PropTypes.object.isRequired,
  setBuyer: PropTypes.func.isRequired,
  setSeller: PropTypes.func.isRequired,
  setAuto: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

export default CompletedDoc;
