import {
  getCounty,
  getCity,
  getSector,
  getStreet,
  getStreetNumber,
  getBlock,
  getBlockUnit,
  getFloor,
  getApartament,
  getFullName,
} from "./addressMapper";

export const sellerDetails = (info) => {
  if (info) {
    return {
      fullName: {
        name: getFullName(info),
        x: 360.48,
        y: 675.5,
        size: 10,
      },
      country: {
        name: info.issuerOrg_full,
        x: 191.25,
        y: 663.5,
        size: 10,
      },
      county: {
        name: getCounty(info),
        x: 280,
        y: 663.5,
        size: 10,
      },
      postalCode: {
        name: "020111",
        x: 420,
        y: 663.5,
        size: 10,
      },
      city: {
        name: getCity(info),
        x: 45,
        y: 653.2,
        size: 10,
      },
      sector: {
        name: getSector(info),
        x: 222,
        y: 653.2,
        size: 10,
      },
      street: {
        name: getStreet(info),
        x: 348,
        y: 653.2,
        size: 10,
      },
      streetNumber: {
        name: getStreetNumber(info),
        x: 555,
        y: 653.2,
        size: 10,
      },
      block: {
        name: getBlock(info),
        x: 58,
        y: 640.6,
        size: 10,
      },
      blockUnit: {
        name: getBlockUnit(info),
        x: 120,
        y: 640.6,
        size: 10,
      },
      floor: {
        name: getFloor(info),
        x: 172,
        y: 640.6,
        size: 10,
      },
      apartament: {
        name: getApartament(info),
        x: 222,
        y: 640.6,
        size: 10,
      },
      documentSeries: {
        name: info.documentNumber.slice(0, 2),
        x: 478,
        y: 640.6,
        size: 10,
      },
      documentNumber: {
        name: info.documentNumber.slice(2, 8),
        x: 532,
        y: 640.6,
        size: 10,
      },
      personalNumber: {
        name: info.personalNumber,
        x: 122,
        y: 629.6,
        size: 10,
      },
      phoneNumber: {
        name: "073166966",
        x: 272,
        y: 629.8,
        size: 10,
      },
      email: {
        name: "test@test.com",
        x: 382,
        y: 629.8,
        size: 10,
      },
      fiscalCountry: {
        name: info.issuerOrg_full,
        x: 182,
        y: 618.8,
        size: 10,
      },
      fiscalCounty: {
        name: getCounty(info),
        x: 312,
        y: 618.8,
        size: 10,
      },
      fiscalPostalCode: {
        name: "020111",
        x: 522,
        y: 618,
        size: 10,
      },
      fiscalCity: {
        name: getCity(info),
        x: 162,
        y: 607,
        size: 10,
      },
      fiscalSector: {
        name: getSector(info),
        x: 356,
        y: 607,
        size: 10,
      },
      fiscalStreet: {
        name: getStreet(info),
        x: 489,
        y: 607,
        size: 10,
      },
      fiscalStreetNumber: {
        name: getStreetNumber(info),
        x: 142,
        y: 595,
        size: 10,
      },
      fiscalblock: {
        name: getBlock(info),
        x: 177,
        y: 595,
        size: 10,
      },
      fiscalblockUnit: {
        name: getBlockUnit(info),
        x: 222,
        y: 595,
        size: 10,
      },
      fiscalfloor: {
        name: getFloor(info),
        x: 260,
        y: 595,
        size: 10,
      },
      fiscalapartament: {
        name: getApartament(info),
        x: 294,
        y: 595,
        size: 10,
      },
    };
  }
};
