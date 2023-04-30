import { degrees, rgb, StandardFonts, PDFDocument } from "pdf-lib";
import axios from "axios";
import backUrl from "assets/backUrl";
import { Base64ToArrayBuffer } from "./pdfHelpers";

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${day}/${month}/${year}`;
// https://autocontract.azurewebsites.net/
export default async function GetContractCompleted(seller, buyer, auto, signatures) {
  const response = await axios.get(`${backUrl}Documents/getPdf`);
  const document = Base64ToArrayBuffer(response.data);
  const pdfDoc = await PDFDocument.load(document);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const sellerSignBytes =
    signatures.sellerSignature !== null
      ? await fetch(signatures.sellerSignature).then((res) => res.arrayBuffer())
      : null;
  const buyerSignBytes =
    signatures.buyerSignature !== null
      ? await fetch(signatures.buyerSignature).then((res) => res.arrayBuffer())
      : null;
  const sellerSignImg =
    signatures.sellerSignature !== null ? await pdfDoc.embedPng(sellerSignBytes) : null;
  const buyerSignImg =
    signatures.buyerSignature !== null ? await pdfDoc.embedPng(buyerSignBytes) : null;
  const sellerDims = signatures.sellerSignature !== null ? sellerSignImg.scale(0.2) : null;
  const buyerDims = signatures.buyerSignature !== null ? buyerSignImg.scale(0.2) : null;
  const customFont = await pdfDoc.embedFont(StandardFonts.CourierBold);
  Object.entries(seller).map(
    (detail) =>
      detail[1].value !== undefined &&
      firstPage.drawText(detail[1].value, {
        x: detail[1].xPosition,
        y: detail[1].yPosition,
        size: 10,
        font: customFont,
        color: rgb(0, 0, 0),
      })
  );
  Object.entries(auto).map(
    (detail) =>
      detail[1].value !== undefined &&
      firstPage.drawText(detail[1].value, {
        x: detail[1].xPosition,
        y: detail[1].yPosition,
        size: detail[0] === "letterPrice" ? 6 : 10,
        font: customFont,
        color: rgb(0, 0, 0),
      }) &&
      console.log(detail)
  );
  Object.entries(buyer).map(
    (detail) =>
      detail[1].value !== undefined &&
      firstPage.drawText(detail[1].value, {
        x: detail[1].xPosition,
        y: detail[1].yPosition,
        size: 10,
        font: customFont,
        color: rgb(0, 0, 0),
      })
  );
  firstPage.drawText(currentDate, {
    x: 200,
    y: 248,
    size: 10,
    font: customFont,
    color: rgb(0, 0, 0),
  });
  if (buyerSignImg !== null) {
    firstPage.drawImage(buyerSignImg, {
      x: 520,
      y: 224,
      width: buyerDims.width,
      height: buyerDims.height,
    });
    firstPage.drawImage(buyerSignImg, {
      x: 520,
      y: 144,
      width: buyerDims.width,
      height: buyerDims.height,
    });
  }
  if (sellerSignImg !== null) {
    firstPage.drawImage(sellerSignImg, {
      x: 400,
      y: 144,
      width: sellerDims.width,
      height: sellerDims.height,
    });
    firstPage.drawImage(sellerSignImg, {
      x: 220,
      y: 224,
      width: sellerDims.width,
      height: sellerDims.height,
    });
  }
  const waterDoc = await PDFDocument.create();
  const [firstDonorPage] = await waterDoc.copyPages(pdfDoc, [0]);
  const { width, height } = firstDonorPage.getSize();
  const customFontWater = await waterDoc.embedFont(StandardFonts.Courier);
  console.log(width);

  firstDonorPage.drawText(
    "AutoContract.ro! Generam pentru tine!\n Achiti si documentul este al tau",
    {
      x: 50,
      y: height / 2 + 300,
      size: 30,
      color: rgb(0.1019, 0.4509, 0.909),
      font: customFontWater,
      rotate: degrees(-45),
    }
  );
  waterDoc.addPage(firstDonorPage);

  const pdfBytes = await pdfDoc.save();
  const waterBytes = await waterDoc.save();
  return { final: pdfBytes, watermarked: waterBytes };
}
