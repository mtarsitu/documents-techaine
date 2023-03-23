import { useState, useEffect } from "react";
// import { pdfDoc } from "./components/document";

import CompletedDoc from "./components/completedDoc";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { dataMock, mockBuyer } from "./data/mockBuyer";
import UploadDocuments from "./components/uploadDocuments";
import axios from "axios";
import SHA1 from "./data/sha1";
import LoadingSpinner from "./spinner";
import { paul } from "./data/mockBuyer";
import { getCounty } from "./data/addressMapper";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Pricing from "./components/pricing/pricing";
import ResponsiveAppBar from "./components/navbar/navbar";
import Blog from "./components/blog/blog";
import Footer from "./components/footer/footer";
import { Button } from "@mui/material";


function App() {
  const [bytePdf, setBytePdf] = useState();
  const [showPdf, setShowPdf] = useState(false);
  const [showUpload, setShowUpload] = useState(true);
  const [scanning, setScanning] = useState(false);
  const [buyer, setBuyer] = useState({});
  const [seller, setSeller] = useState({});

  // console.log(getCounty(dataMock[0]));

  return (
    <>
      <main className="content">
        <Suspense fallback={LoadingSpinner}>
          <ResponsiveAppBar />

          <Routes>
            <Route path="/"/>
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Pachete" element={<Pricing />} />
            <Route
              path="/Contract"
              element={
                <UploadDocuments
                  show={showUpload}
                  setShow={setShowUpload}
                  setSeller={setSeller}
                  setBuyer={setBuyer}
                  setScanning={setScanning}
                  setShowPdf={setShowPdf}
                />
              }
            />
          </Routes>
          {/* <Footer /> */}
        </Suspense>
      </main>
      {/* <UploadDocuments
        show={showUpload}
        setShow={setShowUpload}
        setSeller={setSeller}
        setBuyer={setBuyer}
        setScanning={setScanning}
        setShowPdf={setShowPdf}
      /> */}
      {/* {showPdf && (
        <CompletedDoc
          document={pdfDoc}
          price={120000}
          seller={seller}
          buyer={buyer}
        />
      )} */}
    </>
  );
}

export default App;
