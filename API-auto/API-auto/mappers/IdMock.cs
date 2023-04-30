using API_auto.model;
using API_auto.model.id;
using API_auto.model.auto;
using Microsoft.AspNetCore.Mvc;
using API_auto.helpers;

namespace API_auto.mappers
{
    public static class IdMock
    {
        public static DocumentId GetSeller([FromForm] IncomingData file)
        {
            DocumentId seller = new DocumentId();
            seller.cnp = new Cnp("1890816460026", ClientType.Seller, 0.5f);
            seller.idSerial = new IdSerial("RK", ClientType.Seller, 0.98f);
            seller.idNr = new IdNr("254005", ClientType.Seller, 0.98f);
            seller.fullName = new FullName("Tarsitu Mario", ClientType.Seller, 0.6f);
            seller.citizen = new Citizien("Romana", ClientType.Seller, 0.98f);
            seller.county = new County("Mun. Buc", ClientType.Seller, 0.98f);
            seller.city = new City("Bucuresti", ClientType.Seller, 0.98f);
            seller.subCounty = new SubCounty("S6", ClientType.Seller, 0.98f);
            seller.postalCode = new PostalCode("-", ClientType.Seller, 0.98f);
            seller.street = new Street("Prel Ghencea", ClientType.Seller, 0.98f);
            seller.streetNr = new Streetnumber("84", ClientType.Seller, 0.98f);
            seller.block = new Block("-", ClientType.Seller, 0.98f);
            seller.blockUnit = new BlockUnit("-", ClientType.Seller, 0.98f);
            seller.floor = new Floor("-", ClientType.Seller, 0.98f);
            seller.apartament = new Apartament("-", ClientType.Seller, 0.98f);
            seller.email = new Email(file.SellerEmail != null ? file.SellerEmail : "-", ClientType.Seller, 0.98f);
            seller.phoneNumber = new PhoneNumber("-", ClientType.Seller, 0.98f);
            return seller;
        }

        public static DocumentId GetBuyer([FromForm] IncomingData file)
        {
            DocumentId buyer = new DocumentId();
            buyer.cnp = new Cnp("B1890816460026", ClientType.Buyer, 0.98f);
            buyer.idSerial = new IdSerial("BRK", ClientType.Buyer, 0.98f);
            buyer.idNr = new IdNr("B254005", ClientType.Buyer, 0.98f);
            buyer.fullName = new FullName("BTarsitu Mario", ClientType.Buyer, 0.98f);
            buyer.citizen = new Citizien("BRomana", ClientType.Buyer, 0.98f);
            buyer.county = new County("BMun. Buc", ClientType.Buyer, 0.98f);
            buyer.city = new City("Bucuresti", ClientType.Buyer, 0.98f);
            buyer.subCounty = new SubCounty("sector 3", ClientType.Buyer, 0.98f);
            buyer.postalCode = new PostalCode("-", ClientType.Buyer, 0.98f);
            buyer.street = new Street("BPrel Ghencea", ClientType.Buyer, 0.98f);
            buyer.streetNr = new Streetnumber("B84", ClientType.Buyer, 0.98f);
            buyer.block = new Block("A4", ClientType.Buyer, 0.98f);
            buyer.blockUnit = new BlockUnit("C", ClientType.Buyer, 0.98f);
            buyer.floor = new Floor("21", ClientType.Buyer, 0.98f);
            buyer.apartament = new Apartament("44", ClientType.Buyer, 0.98f);
            buyer.email = new Email(file.BuyerEmail != null ? file.BuyerEmail : "-", ClientType.Buyer, 0.98f);
            buyer.phoneNumber = new PhoneNumber("-", ClientType.Buyer, 0.98f);
            return buyer;
        }

        public static AutoId GetAuto([FromForm] IncomingData file)
        {
            AutoId auto = new AutoId();
            auto.mark = new Mark("Porsche", 0.98f);
            auto.model = new Model("Panamera", 0.98f);
            auto.vin = new Vin("WWWAUSAAA33331D", 0.98f);
            auto.displacement = new Displacement("4554", 0.98f);
            auto.motorSerial = new MotorSerial("12131", 0.98f);
            auto.year = new Year("2023", 0.98f);
            auto.euro = new Euro("7", 0.98f);
            auto.autoCardId = new AutoCardId("11111", 0.6f);
            auto.price = new Price(file.Price.ToString(), 0.8f);
            auto.letterPrice = new LetterPrice(PriceHelper.ConversieNumarIntreg((int)file.Price), 0.98f);
            auto.plateNumber = new PlateNumber("-", 0.98f);
            auto.itpExpire = new ItpExpire("-", 0.98f);
            auto.buyedAt = new BuyedAt("-", 0.98f);
            auto.buyedWith = new BuyedWith("-", 0.98f);
            return auto;
        }

    }
}