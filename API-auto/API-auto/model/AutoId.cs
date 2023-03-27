using API_auto.model.auto;

namespace API_auto.model
{
    public class AutoId: BaseDocument
    {
        public Mark? mark {get;set;}
        public Model? model {get;set;}
        public Vin? vin {get;set;}
        public Displacement? displacement {get;set;}
        public MotorSerial? motorSerial {get;set;}
        public Year? year {get;set;}
        public Euro? euro {get;set;}
        public AutoCardId? autoCardId { get; set; }
        public Price? price {get;set;}
        public LetterPrice? letterPrice {get;set;}
        public PlateNumber? plateNumber { get; set; }
        public ItpExpire? itpExpire {get;set;}
        public BuyedAt? buyedAt {get;set;}
        public BuyedWith? buyedWith {get;set;}

    }
}