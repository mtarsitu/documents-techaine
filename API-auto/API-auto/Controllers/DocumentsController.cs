using Microsoft.AspNetCore.Mvc;
using API_auto.services;
using Azure.AI.FormRecognizer.DocumentAnalysis;
using API_auto.model;
using API_auto.model.id;
using API_auto.helpers;
using API_auto.mappers;

namespace API_auto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DocumentsController : Controller
    {
        private readonly ILogger<DocumentsController> _logger;
        private readonly IdReaderService _service;
        private readonly AutoIdReaderService _autoService;
        public DocumentsController(ILogger<DocumentsController> logger,IdReaderService service, AutoIdReaderService autoService)
        {
            _logger = logger;
            _service = service;
            _autoService = autoService;
        }


        [HttpPost("getResult")]
        public async Task<IEnumerable<DocumentId>> GetResult([FromForm] IncomingImages file)
        {
            var sellerResult = await _service.GetOcrDocument(file.SellerId, ClientType.Seller);
            // var buyerResult = await _service.GetOcrDocument(file.BuyerId, ClientType.Buyer);
            // var autoResult = await _autoService.GetOcrAutoDocument(file.AutoId);
            List<DocumentId> idDates = new List<DocumentId>{sellerResult};
            
            return idDates;
        }

        [HttpPost("test")]
        public OutDocuments GetTestResult([FromForm] IncomingImages file)
        {
            DocumentId seller = IdMock.GetSeller(file);
            DocumentId buyer = IdMock.GetBuyer(file);
            AutoId auto = IdMock.GetAuto(file); 
           

            OutDocuments outDocuments = new OutDocuments{
                Seller = seller,
                Buyer = buyer,
                Auto = auto
            };
            return outDocuments;
        }


        [HttpGet("getPdf")]
        public string GetPdf()
        {
            return PdfHelper.GetPdfBytes();
        }
    }
}