using API_auto.model.id;
namespace API_auto.model
{
    public class Id
    {
        public static ClientType clientType {get;set;}
        public Cnp cnp { get; set; } = new Cnp("-",clientType);
        public IdSerial idSerial { get; set; } = new IdSerial("-",clientType);
        public IdNr idNr { get; set; } = new IdNr("-",clientType);
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public FullName fullName {get{ return new FullName($"{firstName} {lastName}", clientType);}}
        public Citizien citizen { get; set; } = new Citizien("-",clientType);
        public County county { get; set; } = new County("-",clientType);
        public Street street { get; set; } = new Street("-",clientType);
        public Streetnumber streetNr {get;set;} = new Streetnumber("-",clientType);
        public Block block { get; set; } = new Block("-",clientType);
        public BlockUnit blockUnit { get; set; } = new BlockUnit("-",clientType);
        public Floor floor { get; set; } = new Floor("-",clientType);
        public Apartament apartament { get; set; } = new Apartament("-",clientType);
        public SubCounty subCounty  { get; set; } = new SubCounty("-",clientType);

        public Id(ClientType _clientType)
        {
            clientType = _clientType;
        }
    }
}