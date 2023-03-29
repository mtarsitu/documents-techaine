using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.DTO
{
    public class EmailDto
    {
        public string? ClientEmail {get;set;}
        public string? ClientName {get;set;}
        public string? ClientSubject {get;set;}
        public string? ClientMessage {get;set;}
        public IFormFile? AutoContractLogo {get;set;}
    }
}