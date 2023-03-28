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
        public async Task<OutDocuments> GetResult([FromForm] IncomingImages file)
        {
            var sellerResultTask = _service.GetOcrDocument(file.SellerId, ClientType.Seller);
            var buyerResultTask = _service.GetOcrDocument(file.BuyerId, ClientType.Buyer);
            var autoResultTask = _autoService.GetOcrAutoDocument(file.AutoId,file.Price);
            // List<DocumentId> idDates = new List<DocumentId>{sellerResult};
            var (sellerResult,buyerResult,autoResult)
             = await TaskExtensionsHelper.WhenAll(sellerResultTask, buyerResultTask,autoResultTask);
            
            var outData = new OutDocuments
            {
                Seller = sellerResult,
                Buyer = buyerResult,
                Auto = autoResult
            };
            return outData;
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

        [HttpPost("paymentTest")]
        public void PaymentTest([FromForm]Payment payment)
        {
            _Default.btnPay_Click(payment);
        }
    }
}