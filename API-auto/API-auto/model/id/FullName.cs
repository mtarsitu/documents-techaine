namespace API_auto.model.id
{
    public class FullName : BaseField
    {
        public FullName(string value,ClientType type) : base(value)
        {
            XPosition = type == ClientType.Seller ? 360.48 :350.48;
            YPosition = type == ClientType.Seller ?  675.5 : 557.5;
        }
    }
}