export const manualInputs = [
  {
    name: "sellerEmail",
    type: "email",
    label: "Email-ul vanzatorului",
    helperText: "Introdu o adresa de mail valida!",
    regex: /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i,
  },
  {
    name: "sellerPhone",
    label: "Telefonul vanzatorului (nu este necesar)",
    helperText: "Introdu o adresa de mail valida!",
    regex:
      /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}(\s|\.|-)?([0-9]{3}(\s|\.|-|)){2}$/,
  },
  {
    name: "buyerEmail",
    type: "email",
    label: "Email-ul cumparatorului",
    helperText: "Introdu o adresa de mail valida!",
    regex: /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i,
  },
  {
    name: "buyerPhone",
    label: "Telefonul cumparatorului (nu este necesar)",
    helperText: "Introdu o adresa de mail valida!",
    regex:
      /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}(\s|\.|-)?([0-9]{3}(\s|\.|-|)){2}$/,
  },
  {
    name: "plateNumber",
    label: "Numarul de inmatriculare al autovehiculului",
    helperText: "Introdu un numar de inmatriculare valid",
    regex: /^[A-Za-z0-9]*$/,
  },
  {
    name: "price",
    type: "text",
    label: "",
    helperText: "Acest camp poate contine doar cifre",
    regex: /^\d+$/,
  },
];

export const test = 2;
