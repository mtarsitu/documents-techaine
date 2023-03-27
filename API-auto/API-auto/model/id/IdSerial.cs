namespace API_auto.model.id
{
    public class IdSerial : BaseField
    {
        public IdSerial(string value,ClientType type, float confidence) : base(value,confidence)
        {
            XPosition = type == ClientType.Seller ? 478 : 478;
            YPosition = type == ClientType.Seller ? 640.6 : 523.5;
        }
    }
}