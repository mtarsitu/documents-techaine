export const carDetails = (info) => {
  if (info) {
    return {
      make: {
        name: info.make,
        x: 165,
        y: 431,
        size: 10,
      },
      type: {
        name: info.type,
        x: 298,
        y: 431,
        size: 10,
      },
      vin: {
        name: info.vin,
        x: 440,
        y: 431,
        size: 10,
      },
      motorSerial: {
        name: info.motorSerial,
        x: 100,
        y: 419,
        size: 10,
      },
      displacement: {
        name: info.displacement,
        x: 254,
        y: 419,
        size: 10,
      },
      plateNumber: {
        name: info.plateNumber,
        x: 224,
        y: 408,
        size: 10,
      },
      itpExpire: {
        name: info.itpExpire,
        x: 480,
        y: 408,
        size: 10,
      },
      cardId: {
        name: info.cardId,
        x: 220,
        y: 397,
        size: 10,
      },
      year: {
        name: info.year,
        x: 360,
        y: 397,
        size: 10,
      },
      euro: {
        name: info.euro,
        x: 475,
        y: 397,
        size: 10,
      },
      buyedAt: {
        name: info.buyedAt,
        x: 55,
        y: 385,
        size: 10,
      },
      buyedWith: {
        name: info.buyedWith,
        x: 225,
        y: 385,
        size: 10,
      },
    };
  }
};
