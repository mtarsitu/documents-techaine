using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.services
{
    public interface IEmailSender
    {
        Task SendEmail(Message message);
    }
}