namespace API_auto.model.id
{
    public class Citizien : BaseField
    {
        public Citizien(string value,ClientType type, float confidence) : base(value,confidence)
        {
            XPosition = type == ClientType.Seller ? 191.25 : 191.25;
            YPosition = type == ClientType.Seller ? 663.5 : 546.5;
        }
    }
}