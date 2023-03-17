namespace API_auto.model.id
{
    public class Apartament : BaseField
    {
        public Apartament(string value, ClientType type) : base(value)
        {
            XPosition = type == ClientType.Seller ? 222 : 222;
            YPosition = type == ClientType.Seller ? 640.6 : 523.5;
        }
    }
}