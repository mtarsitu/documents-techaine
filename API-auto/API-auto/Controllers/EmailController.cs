using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API_auto.DTO;
using API_auto.services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API_auto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : Controller
    {
        private readonly ILogger<EmailController> _logger;
        private readonly IEmailSender _emailSender;

        public EmailController(ILogger<EmailController> logger, IEmailSender emailSender)
        {
            _logger = logger;
            _emailSender = emailSender;
        }

        [HttpPost("sendEmail")]
        public async Task SendEmail([FromForm] EmailDto dto)
        {
            var client = new Message(new string[] {dto.ClientEmail},"Cerere contact autocontract.ro",dto.ClientMessage,dto.AutoContractLogo);
            var house = new Message(new string[] {"social@techaine.com"},"Cerere contact autocontract.ro",$"{dto.ClientSubject}\n{dto.ClientMessage}",dto.AutoContractLogo);
            await _emailSender.SendEmail(client);
            await _emailSender.SendEmail(house);

        }

        
    }
}