namespace API_auto.model
{
    public class IncomingImages
    {
        public IFormFile? SellerId {get;set;}
        public IFormFile? BuyerId {get;set;}
        public IFormFile? AutoId {get;set;}
        public string? Price {get;set;}
        public string? SellerEmail {get;set;}
        public string? SellerPhone{get;set;}
        public string? BuyerEmail {get;set;}
        public string? BuyerPhone {get;set;}
        public string? PlateNumber {get;set;}
        public string? ItpExpire {get;set;}
        public string? BuyedWith {get;set;}
        public string? BuyedAt {get;set;}
    }
}