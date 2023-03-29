using API_auto.model;
namespace API_auto.DTO
{
    public class ManualDto
    {
        DocumentId? Seller {get;set;}
        DocumentId? Buyer {get;set;}
        AutoId? Auto {get;set;}
    }
}