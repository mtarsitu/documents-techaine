import { useState, useEffect } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { Document, Page, pdfjs } from "react-pdf";
import { inWords } from "../data/toWords";
import { audi } from "../data/mockBuyer";
import { getCarInfo } from "../data/carMapper";
import { carDetails } from "../data/carDetails";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}/${year}`;

const CompletedDoc = ({ document, price, seller, buyer }) => {
  const [bytePdf, setBytePdf] = useState();
  const [font, setFont] = useState();
  const courierBoldFont = async () =>
    setFont(await document.embedFont(StandardFonts.CourierBold));

  // Get the first page of the document
  const pages = document.getPages();
  const firstPage = pages[0];

  // Get the width and height of the first page
  // const { width, height } = firstPage.getSize();

  // Draw a string of text diagonally across the first page
  const toSell = carDetails(getCarInfo(audi));
  Object.entries(toSell).map((detail) => {
    firstPage.drawText(detail[1].name, {
      x: detail[1].x,
      y: detail[1].y,
      size: detail[1].size,
      color: rgb(0.95, 0.1, 0.1),
      // rotate: degrees(-45),
    });
  });
  Object.entries(seller).map((detail) => {
    firstPage.drawText(detail[1].name, {
      x: detail[1].x,
      y: detail[1].y,
      size: detail[1].size,
      color: rgb(0.95, 0.1, 0.1),
      // rotate: degrees(-45),
    });
  });
  Object.entries(buyer).map((detail) => {
    console.log(detail);
    firstPage.drawText(detail[1].name, {
      x: detail[1].x,
      y: detail[1].y,
      size: detail[1].size,
      color: rgb(0.95, 0.1, 0.1),
      // rotate: degrees(-45),
    });
  });
  //rgb(0, 0, 0, 0.5)
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const completeRest = () => {
    firstPage.drawText(currentDate, {
      x: 200,
      y: 248,
      size: 10,
      // font: font,
      color: rgb(0.95, 0.1, 0.1),
      // rotate: degrees(-45),
    });

    firstPage.drawText(price.toString(), {
      x: 140,
      y: 368,
      size: 10,
      // font: font,
      color: rgb(0.95, 0.1, 0.1),
      // rotate: degrees(-45),
    });
    firstPage.drawText(inWords(price), {
      x: 280,
      y: 368,
      size: 10,
      // font: font,
      color: rgb(0.95, 0.1, 0.1),
      // rotate: degrees(-45),
    });
  };
  const pdfBytes = async () => setBytePdf(await document.save());
  useEffect(() => {
    courierBoldFont();
  }, []);
  useEffect(() => {
    completeRest();
    pdfBytes();
  }, []);
  return (
    <>
      {bytePdf && (
        <Document
          file={{ data: bytePdf }}
          onLoadSuccess={() => console.log("SUCCESS LOAD")}
        >
          <Page pageNumber={1} />
        </Document>
      )}
    </>
  );
};

export default CompletedDoc;
