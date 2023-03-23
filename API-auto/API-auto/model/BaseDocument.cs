namespace API_auto.model
{
    public abstract class BaseDocument
    {
        public Guid id {get;} = Guid.NewGuid();
    }
}