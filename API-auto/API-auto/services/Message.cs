using MailKit.Net.Smtp;
using MimeKit;

namespace API_auto.services
{
    public class Message
    {
        public List<MailboxAddress> To { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public IFormFile Logo {get;set;}
        public Message(IEnumerable<string> to, string subject, string content,IFormFile logo)
        {
            To = new List<MailboxAddress>();
            To.AddRange(to.Select(x => new MailboxAddress(x.Split("@")[0],x)));
            Subject = subject;
            Content = content;      
            Logo =logo;  
        }
    }
}