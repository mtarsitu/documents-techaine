namespace API_auto.model
{
    public class Credits
    {
        public int Id {get;set;}
        public string? UserId {get;set;}
        public int Amount {get;set;}
        public DateTime CreatedAt = DateTime.UtcNow;
        public DateTime ValidUntil  {get{return CreatedAt.AddMonths(1);}}
        public bool Valid {get{return (ValidUntil - DateTime.UtcNow).TotalDays >=0;}}
        public User? User {get;set;}
    }
}