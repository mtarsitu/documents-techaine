namespace API_auto.model.id
{
    public class BlockUnit : BaseField
    {
        public BlockUnit(string value, ClientType type) : base(value)
        {
            XPosition = type == ClientType.Seller ? 120 : 120;
            YPosition = type == ClientType.Seller ? 640.6 : 523.5;
        }
    }
}