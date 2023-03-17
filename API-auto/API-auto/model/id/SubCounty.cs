namespace API_auto.model.id
{
    public class SubCounty : BaseField
    {
        public SubCounty(string value, ClientType type) : base(value)
        {
            XPosition = type == ClientType.Seller ? 222 : 222;
            YPosition = type == ClientType.Seller ? 653.2 : 535.5;
        }
    }
}