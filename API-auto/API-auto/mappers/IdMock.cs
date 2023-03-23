using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_auto.model;
using API_auto.model.id;
using Microsoft.AspNetCore.Mvc;

namespace API_auto.mappers
{
    public static class IdMock
    {
        public static DocumentId GetSeller([FromForm] IncomingImages file)
        {
            DocumentId seller = new DocumentId();
            seller.cnp = new Cnp("1890816460026",ClientType.Seller);
            seller.idSerial = new IdSerial("RK",ClientType.Seller);
            seller.idNr = new IdNr("254005",ClientType.Seller);
            seller.fullName = new FullName("Tarsitu Mario",ClientType.Seller);
            seller.citizen = new Citizien("Romana",ClientType.Seller);
            seller.county = new County("Mun. Buc",ClientType.Seller);
            seller.city = new City("Bucuresti",ClientType.Seller);
            seller.subCounty = new SubCounty("S6",ClientType.Seller);
            seller.postalCode = new PostalCode("-",ClientType.Seller);
            seller.street= new Street("Prel Ghencea",ClientType.Seller);
            seller.streetNr= new Streetnumber("84",ClientType.Seller);
            seller.block = new Block("-",ClientType.Seller);
            seller.blockUnit = new BlockUnit("-",ClientType.Seller);
            seller.floor = new Floor("-",ClientType.Seller);
            seller.apartament = new Apartament("-",ClientType.Seller);
            seller.email = new Email(file.SellerEmail != null ? file.SellerEmail : "-",ClientType.Seller);
            seller.phoneNumber = new PhoneNumber(file.SellerPhone != null ? file.SellerPhone : "-",ClientType.Seller);
            return seller;
        }

        public static DocumentId GetBuyer([FromForm] IncomingImages file)
        {
            DocumentId buyer = new DocumentId();
            buyer.cnp = new Cnp("B1890816460026",ClientType.Buyer);
            buyer.idSerial = new IdSerial("BRK",ClientType.Buyer);
            buyer.idNr = new IdNr("B254005",ClientType.Buyer);
            buyer.fullName = new FullName("BTarsitu Mario",ClientType.Buyer);
            buyer.citizen = new Citizien("BRomana",ClientType.Buyer);
            buyer.county = new County("BMun. Buc",ClientType.Buyer);
            buyer.city = new City("Bucuresti",ClientType.Buyer);
            buyer.subCounty = new SubCounty("sector 3",ClientType.Buyer);
            buyer.postalCode = new PostalCode("-", ClientType.Buyer);
            buyer.street= new Street("BPrel Ghencea",ClientType.Buyer);
            buyer.streetNr= new Streetnumber("B84",ClientType.Buyer);
            buyer.block = new Block("A4",ClientType.Buyer);
            buyer.blockUnit = new BlockUnit("C",ClientType.Buyer);
            buyer.floor = new Floor("21",ClientType.Buyer);
            buyer.apartament = new Apartament("44",ClientType.Buyer);
            buyer.email = new Email(file.BuyerEmail != null ? file.BuyerEmail : "-",ClientType.Buyer);
            buyer.phoneNumber = new PhoneNumber(file.BuyerPhone != null ? file.BuyerPhone : "-",ClientType.Buyer);
            return buyer;
        }

        public static AutoId GetAuto([FromForm] IncomingImages file)
        {
            AutoId auto = new AutoId();
            auto.mark.Value = "Porsche";
            auto.model.Value = "Panamera";
            auto.vin.Value = "WWWAUSAAA33331D";
            auto.displacement.Value = "4554";
            auto.motorSerial.Value = "12131";
            auto.year.Value = "2023";
            auto.euro.Value = "7";
            auto.autoCardId.Value = "11111";
            auto.price.Value = file.Price != null? file.Price: "-";
            auto.plateNumber.Value = file.PlateNumber != null? file.PlateNumber: "-";
            auto.itpExpire.Value = file.ItpExpire != null? file.ItpExpire: "-";
            auto.buyedAt.Value = file.BuyedAt != null? file.BuyedAt: "-";
            auto.buyedWith.Value = file.BuyedWith != null? file.BuyedWith: "-";
            return auto;
        }

    }
}