using API_auto.model;
namespace API_auto.DTO
{
    public class OutDocuments
    {
        public DocumentId? Seller {get;set;}
        public DocumentId? Buyer {get;set;}
        public AutoId? Auto {get;set;}
    }
}