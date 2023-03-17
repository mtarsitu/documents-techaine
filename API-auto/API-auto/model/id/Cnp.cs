namespace API_auto.model.id
{
    public class Cnp : BaseField
    {
        public Cnp(string value,ClientType type) : base(value)
        {
            XPosition = type == ClientType.Seller ? 122 : 122;
            YPosition = type == ClientType.Seller ? 629.6 : 512.5;
        }
    }
}