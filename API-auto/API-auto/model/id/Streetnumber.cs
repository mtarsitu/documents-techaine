namespace API_auto.model.id
{
    public class Streetnumber : BaseField
    {
        public Streetnumber(string value,ClientType type) : base(value)
        {
            XPosition = type == ClientType.Seller ? 555 : 555;
            YPosition = type == ClientType.Seller ? 653.2 : 535.5;
        }
    }
}