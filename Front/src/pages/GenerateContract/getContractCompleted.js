import { rgb, StandardFonts, PDFDocument } from "pdf-lib";
import axios from "axios";
import { Base64ToArrayBuffer } from "./pdfHelpers";

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${day}/${month}/${year}`;

export default async function GetContractCompleted(seller, buyer, auto) {
  const response = await axios.get("https://autocontract.azurewebsites.net/Documents/getPdf");
  const document = Base64ToArrayBuffer(response.data);
  const pdfDoc = await PDFDocument.load(document);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  const d = await pdfDoc.embedFont(StandardFonts.CourierBold);
  Object.entries(seller).map(
    (detail) =>
      detail[1].value !== undefined &&
      firstPage.drawText(detail[1].value, {
        x: detail[1].xPosition,
        y: detail[1].yPosition,
        size: 10,
        font: d,
        color: rgb(0.95, 0.1, 0.1),
      })
  );
  Object.entries(auto).map(
    (detail) =>
      detail[1].value !== undefined &&
      firstPage.drawText(detail[1].value, {
        x: detail[1].xPosition,
        y: detail[1].yPosition,
        size: 10,
        font: d,
        color: rgb(0.95, 0.1, 0.1),
      })
  );
  Object.entries(buyer).map(
    (detail) =>
      detail[1].value !== undefined &&
      firstPage.drawText(detail[1].value, {
        x: detail[1].xPosition,
        y: detail[1].yPosition,
        size: 10,
        font: d,
        color: rgb(0.95, 0.1, 0.1),
      })
  );
  firstPage.drawText(currentDate, {
    x: 200,
    y: 248,
    size: 10,
    font: d,
    color: rgb(0.95, 0.1, 0.1),
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
