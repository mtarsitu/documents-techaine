import { useState, useEffect } from "react";
import { pdfDoc } from "./components/document";
import CompletedDoc from "./components/documentTest";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { dataMock, mockBuyer } from "./data/mockBuyer";
import UploadDocuments from "./components/uploadDocuments";
import axios from "axios";
import SHA1 from "./data/sha1";

import { paul } from "./data/mockBuyer";
import { getCounty } from "./data/addressMapper";

function App() {
  const [bytePdf, setBytePdf] = useState();
  const [showPdf, setShowPdf] = useState(false);
  const [showUpload, setShowUpload] = useState(true);
  const [scanning, setScanning] = useState(false);
  const [buyer, setBuyer] = useState({});
  const [seller, setSeller] = useState({});
  // let a = { 0: "Bucureşti", 1: "c", 2: "sada" };
  // Object.keys(a).map((key) => a[key]=a[key].includes("ş")?a[key].replace("ş","s"):a[key]);

  // let apiPrefix = "https://api.vindecoder.eu/3.2";
  // let apiKey = "dd6a0bba6e5e"; // Your API key
  // let secretKey = "b4753ab54d"; // Your secret key
  // let id = "decode";
  // let vin = "WDD1760021J326569";

  // let controlSum = SHA1(
  //   vin + "|" + id + "|" + apiKey + "|" + secretKey
  // ).substring(0, 10);
  // let url =
  //   apiPrefix + "/" + apiKey + "/" + controlSum + "/decode/" + vin + ".json";

  // // Create a request variable and assign a new XMLHttpRequest object to it.
  // let request = new XMLHttpRequest();
  // let table;

  // // Open a new connection, using the GET request on the URL endpoint
  // request.open("GET", url, true);

  // request.onload = function () {
  //   // Begin accessing JSON data here
  //   let data = JSON.parse(this.response);
  //   console.log(data);
  //   table = document.getElementById("results");

  //   if (
  //     request.status >= 200 &&
  //     request.status < 400 &&
  //     data.hasOwnProperty("decode")
  //   ) {
  //     data.decode.forEach(function (decodeData) {
  //       let rowData = parseResponseRow(decodeData);

  //       addTableRow(table, rowData.label, rowData.value);
  //     });
  //   } else {
  //     console.log("error");
  //   }
  // };

  // request.send();

  // function addTableRow(table, label, value) {
  //   let tr = document.createElement("tr");

  //   let tdLabel = document.createElement("td");
  //   tdLabel.appendChild(document.createTextNode(label));
  //   tr.appendChild(tdLabel);

  //   let tdValue = document.createElement("td");
  //   tdValue.innerHTML = value;
  //   tr.appendChild(tdValue);

  //   table.appendChild(tr);
  // }

  // function parseResponseRow(data) {
  //   let { label, value } = data;

  //   if (typeof value === "object") {
  //     value = flattenArray(value);
  //   }

  //   return { label, value };
  // }

  // function flattenArray(data, level = 0) {
  //   let output = [];
  //   for (const key in data) {
  //     if (!data.hasOwnProperty(key)) {
  //       continue;
  //     }

  //     if (typeof data[key] === "object") {
  //       data[key] = flattenArray(data[key], level + 1);
  //     }

  //     if (isNaN(parseFloat(key))) {
  //       output.push(`${key}: ${data[key]}`);
  //     } else {
  //       output.push(data[key]);
  //     }
  //   }

  //   return output.join(level === 0 ? "<br>" : ", ");
  // }
  console.log(getCounty(dataMock[0]));

  return (
    <>
      <UploadDocuments
        show={showUpload}
        setShow={setShowUpload}
        setSeller={setSeller}
        setBuyer={setBuyer}
        setScanning={setScanning}
        setShowPdf={setShowPdf}
      />
      {showPdf && (
        <CompletedDoc
          document={pdfDoc}
          price={120000}
          seller={seller}
          buyer={buyer}
        />
      )}
    </>
  );
}

export default App;
