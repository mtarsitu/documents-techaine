export const getCarInfo = (car) => {
  let info = {
    make: "-",
    type: "-",
    vin: "-",
    motorSerial: "-",
    displacement: "-",
    plateNumber: "-",
    itpExpire: "-",
    cardId: "-",
    year: "-",
    euro: "-",
    buyedAt: "-",
    buyedWith: "-",
  };
  for (let i = 0; i < car.length; i++) {
    if (car[i].label === "VIN") {
      info.vin = car[i].value;
    }
    if (car[i].label === "Make") {
      info.make = car[i].value;
    }
    if (car[i].label === "Model") {
      info.type = car[i].value;
    }
    if (car[i].label === "Engine Displacement (ccm)") {
      info.displacement = car[i].value.toString();
    }
    if (car[i].label === "Model Year") {
      info.year = car[i].value.toString();
    }
    if (car[i].label === "Emission Standard") {
      info.euro = car[i].value.split(" ")[1];
    }
  }
  return info;
};
