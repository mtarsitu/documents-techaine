namespace API_auto.model.id
{
    public class City : BaseField
    {
        public City(string value, ClientType type, float confidence) : base(value,confidence)
        {
            XPosition = type == ClientType.Seller ? 45 : 45;
            YPosition = type == ClientType.Seller ? 653.2 : 535.5;
        }
    }
}