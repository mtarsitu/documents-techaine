namespace API_auto.model.id
{
    public class Citizien : BaseField
    {
        public Citizien(string value,ClientType type) : base(value)
        {
            XPosition = type == ClientType.Seller ? 191.25 : 191.25;
            YPosition = type == ClientType.Seller ? 663.5 : 546.5;
        }
    }
}