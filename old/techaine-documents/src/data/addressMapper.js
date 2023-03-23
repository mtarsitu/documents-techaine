export const getCounty = (info) => {
  let county;
  console.log(info);
  if (info.address1.includes("Jud.")) {
    let i = info.address1.indexOf("Jud.")
    let j = info.address1.indexOf("Mun.");
    
    return(info.address1.slice(i,j).replace("Jud.",""))

  }
  else if (info.address1.includes("Mun.")) {
    // county = info.address1.split("Mun.");
    // county = county[1].split(" ");
    // county = county.filter((x) => x != "");
    // return county[0].replace("ş", "s");
    return info.address1
      .split("Mun.")[1]
      .split(" ")
      .filter((x) => x != "")[0]
      .replace("ş", "s");
  }
};

export const getCity = (info) => {
  let address = `${info.address1} ${info.address2}`;
  if (address.includes("Mun.")) {
    if (address.includes("Jud.")) {
      address = address.split("Mun.").filter((x) => x != "");
      return address[0].split("Jud.")[0];
    } else
      return address
        .split("Mun.")
        .filter((x) => x !== "")[0]
        .split(" ")
        .filter((x) => x !== "")[0];
  } else if (address.includes("Com.")) {
    return address.split(" ").filter((x) => x.startsWith("Com."))[0];
  }
};

export const getSector = (info) => {
  let address = `${info.address1} ${info.address2}`;
  if (address.includes("Sec.")) {
    return (
      "Sector " +
      address
        .split("Sec.")[1]
        .split(" ")
        .filter((s) => s !== "")[0]
    );
  }
  if (address.includes("Sat.")) {
    return (
      "Satul " +
      address
        .split("Sat.")[1]
        .split(" ")
        .filter((s) => s !== "")[0]
    );
  }
  return "";
};

export const getStreetNumber = (info) => {
  let number;
  if (info.address2.split("nr.")[1].length > 4) {
    number = info.address2.split("nr.")[1].split(" ")[0];
  } else number = info.address2.split("nr.")[1];
  return number;
};

export const getStreet = (info) => {
  return info.address2.split("nr.")[0];
};

export const getBlock = (info) => {
  if (info.address2.includes("bl.")) {
    return info.address2.split("bl.")[1].split(" ")[0];
  }
  return "-";
};
export const getBlockUnit = (info) => {
  if (info.address2.includes("sc.")) {
    return info.address2.split("sc.")[1].split(" ")[0];
  }
  return "-";
};

export const getFloor = (info) => {
  if (info.address2.includes("et.")) {
    return info.address2.split("et.")[1].split(" ")[0];
  }
  return "-";
};

export const getApartament = (info) => {
  if (info.address2.includes("ap.")) {
    return info.address2.split("ap.")[1].split(" ")[0];
  }
  return "-";
};

export const getFullName = (info) => {
  if (info.middleName) {
    return `${info.lastName} ${info.firstName} ${info.middleName}`;
  } else return `${info.lastName} ${info.firstName}`;
};
