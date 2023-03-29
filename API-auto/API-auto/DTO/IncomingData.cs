namespace API_auto.model
{
    public class IncomingData
    {
        public IFormFile? SellerId {get;set;}
        public IFormFile? BuyerId {get;set;}
        public IFormFile? AutoId {get;set;}
        public string? SellerEmail {get;set;}
        public string? SellerPhone {get;set;}
        public string? BuyerEmail {get;set;}
        public string? BuyerPhone {get;set;}
        public string? PlateNumber {get;set;}
        public double Price {get;set;}
    }
}