namespace API_auto.model.id
{
    public class IdNr : BaseField
    {
        public IdNr(string value,ClientType type, float confidence) : base(value,confidence)
        {
            XPosition = type == ClientType.Seller ? 532 : 532;
            YPosition = type == ClientType.Seller ? 640.6 : 523.5;
        }
    }
}