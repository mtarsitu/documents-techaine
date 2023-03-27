using API_auto.model.id;
namespace API_auto.model
{
    public class DocumentId: BaseDocument
    {
        public Cnp? cnp { get; set; }
        public IdSerial? idSerial { get; set; }
        public IdNr? idNr { get; set; } 
        public FullName? fullName {get;set;} 
        public Citizien? citizen { get; set; } 
        public County? county { get; set; }
        public City? city {get;set;}
        public SubCounty? subCounty  { get; set; }
        public PostalCode? postalCode {get;set;}
        public Street? street { get; set; }
        public Streetnumber? streetNr {get;set;}
        public Block? block { get; set; }
        public BlockUnit? blockUnit { get; set; }
        public Floor? floor { get; set; }
        public Apartament? apartament { get; set; }
        public Email? email {get;set;}
        public PhoneNumber? phoneNumber {get;set;}


    }
}