using API_auto.model.auto;

namespace API_auto.model
{
    public class AutoId
    {
        public Mark mark {get;set;} = new Mark("-");
        public Model model {get;set;} = new Model("-");
        public Vin vin {get;set;} = new Vin("-");
        public Displacement displacement {get;set;} = new Displacement("-");
        public MotorSerial motorSerial {get;set;} = new MotorSerial("-");
        public Year year {get;set;} = new Year("-");
        public Euro euro {get;set;} = new Euro("-");

        public AutoCardId autoCardId { get; set; }  = new AutoCardId("-");

        public PlateNumber plateNumber { get; set; } = new PlateNumber("-");
        public ItpExpire itpExpire {get;set;} = new ItpExpire("-");
        public BuyedAt buyedAt {get;set;} = new BuyedAt("-");
        public BuyedWith buyedWith {get;set;} = new BuyedWith("-");
        public string? modelCode {get;set;}

    }
}