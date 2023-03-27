namespace API_auto.model.id
{
    public class Block : BaseField
    {
        public Block(string value, ClientType type, float confidence) : base(value,confidence)
        {
            XPosition = type == ClientType.Seller ? 58 : 58;
            YPosition = type == ClientType.Seller ? 640.6 : 523.5;
        }
    }
}