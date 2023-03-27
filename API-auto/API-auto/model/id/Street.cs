namespace API_auto.model.id
{
    public class Street : BaseField
    {
        public Street(string value,ClientType type, float confidence) : base(value,confidence)
        {
            XPosition = type == ClientType.Seller ? 348 : 348;
            YPosition = type == ClientType.Seller ? 653.2 : 535.5;
        }
    }
}