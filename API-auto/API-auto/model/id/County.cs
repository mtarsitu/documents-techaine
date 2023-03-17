namespace API_auto.model.id
{
    public class County : BaseField
    {
        public County(string value, ClientType type) : base(value)
        {
            XPosition = type == ClientType.Seller ? 280 :280;
            YPosition = type == ClientType.Seller ? 663.5 : 546.5;
        }
    }
}