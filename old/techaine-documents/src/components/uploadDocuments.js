import { DropzoneArea } from "react-mui-dropzone";
import { Button, Box, Avatar, Typography } from "@mui/material";
import axios from "axios";
import QueueIcon from "@mui/icons-material/Queue";
import { useState } from "react";
import { sellerDetails } from "../data/sellerDetails";
import { buyerDetails } from "../data/buyerDetails";

const UploadDocuments = ({
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
    // <Modal
    //   open={show}
    //   onClose={handleClose}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    //   sx={{ overflow: "scroll" }}
    // >
    <Box
      m="20px"
      marginTop={70}
      sx={{
        position: "absolute",
        marginBottom: 20,
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90vw",
        backgroundColor: "whitesmoke",
        boxShadow: 24,
        borderRadius: "12px",
      }}
    >
      <Box m="20px">
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <QueueIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Documente necesare pentru generarea contractului
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box sx={{ marginTop: 10 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ m: "0 0 5px 0", color: "black" }}
            >
              Incarca buletinul Vanzatorului
            </Typography>

            <DropzoneArea
              maxWidth="50px!important"
              previewText="Verificare:"
              onChange={addSellerCard.bind(this)}
              filesLimit={1}
              acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
              maxFileSize={5000000}
              dropzoneText="Apasa sau pune buletinul vanzatorului direct aici "
            />
          </Box>
          <Box sx={{ marginTop: 10 }}>
            <Typography
              variant="h5"
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
              maxFileSize={5000000}
              dropzoneText="Apasa sau pune buletinul cumparatorului direct aici "
            />
          </Box>
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
    // </Modal>
  );
};

export default UploadDocuments;
