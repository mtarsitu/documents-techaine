import { DropzoneArea } from "react-mui-dropzone";
import { Button, Modal, Box, Avatar, Typography } from "@mui/material";
import axios from "axios";
import QueueIcon from "@mui/icons-material/Queue";
import { useState } from "react";
import { sellerDetails } from "../data/sellerDetails";
import { buyerDetails } from "../data/buyerDetails";
import { dataMock } from "../data/mockBuyer";
const UploadDocuments = ({
  show,
  setShow,
  setSeller,
  setBuyer,
  setScanning,
  setShowPdf,
}) => {
  const [files, setFiles] = useState({ sellerCard: "", buyerCard: "" });

  const handleClose = () => {
    setShow(false);
  };

  const addSellerCard = (file) => {
    //Saving files to state for further use and closing Modal.
    // setShow(false);
    setFiles((prevFile) => {
      return {
        ...prevFile,
        sellerCard: file,
      };
    });
  };
  const addBuyerCard = (file) => {
    //Saving files to state for further use and closing Modal.
    // setShow(false);
    setFiles((prevFile) => {
      return {
        ...prevFile,
        buyerCard: file,
      };
    });
  };
  const setForm = () => {
    const formData = new FormData();

    formData.append("seller", files.sellerCard[0]);
    formData.append("buyer", files.buyerCard[0]);
    setScanning(true);
    upload(formData);
    setShow(false);
  };

  const upload = async (form) => {
    let buyer;
    let seller;
    try {
      const response = await axios.post("http://localhost:5002/upload", form);
      console.log(response.data);
      seller = response.data[0];
      buyer = response.data[1];

      setSeller(sellerDetails(seller));
      setBuyer(buyerDetails(buyer));
      setScanning(false);
      setShowPdf(true);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ overflow: "scroll" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          backgroundColor: "whitesmoke",
          border: "2px solid #000",
          boxShadow: 24,
          borderRadius: "12px",
          overflow: "scroll",
          p: 4,
        }}
      >
        <Box m="20px">
          <Box
            sx={{
              marginTop: -10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <QueueIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Documente necesare
            </Typography>
          </Box>
          <Box sx={{ marginTop: 10 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ m: "0 0 5px 0", color: "black" }}
            >
              Incarca buletinul Vanzatorului
            </Typography>

            <DropzoneArea
              previewText="Verificare:"
              onChange={addSellerCard.bind(this)}
              filesLimit={1}
              acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
              showPreviews={true}
              maxFileSize={5000000}
              dropzoneText="Apasa sau pune buletinul direct aici "
            />
          </Box>
          <Box sx={{ marginTop: 10 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ m: "0 0 5px 0", color: "black" }}
            >
              Incarca buletinul Cumparatorului
            </Typography>
            <DropzoneArea
              previewText="Verificare:"
              onChange={addBuyerCard.bind(this)}
              filesLimit={1}
              acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
              showPreviews={true}
              maxFileSize={5000000}
              dropzoneText="Apasa sau pune buletinul direct aici "
            />
            <Button
              onClick={setForm}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Scaneaza documente
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default UploadDocuments;
