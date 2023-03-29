using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.DTO
{
    public class PdfDto
    {
        public string? SellerEmail{get;set;}
        public string? BuyerEmail{get;set;}

        public IFormFile? Pdf {get;set;}
    }
}