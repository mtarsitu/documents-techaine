import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import axios from "axios";
import { sellerDetails } from "../data/sellerDetails";
import { buyerDetails } from "../data/buyerDetails";
import { inWords } from "../data/toWords";
import { base64ToArrayBuffer } from "../data/toArrayBuffer";
// This should be a Uint8Array or ArrayBuffer
// This data can be obtained in a number of different ways
// If your running in a Node environment, you could use fs.readFile()
// In the browser, you could make a fetch() call and use res.arrayBuffer()


// PDFJS.workerSrc = "pdf.worker.js";

const response = await axios.get("http://localhost:5002/getPdf");
const bytes = base64ToArrayBuffer(response.data);

// Load a PDFDocument from the existing PDF bytes
export const pdfDoc = await PDFDocument.load(bytes);

// Embed the Helvetica font
