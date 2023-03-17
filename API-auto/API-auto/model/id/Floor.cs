namespace API_auto.model.id
{
    public class Floor : BaseField
    {
        public Floor(string value, ClientType type) : base(value)
        {
            XPosition = type == ClientType.Seller ? 172 : 172;
            YPosition = type == ClientType.Seller ? 640.6 : 523.5;
        }
    }
}