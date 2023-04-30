using Microsoft.AspNetCore.Mvc;
using API_auto.services;
using Azure.AI.FormRecognizer.DocumentAnalysis;
using API_auto.model;
using API_auto.model.id;
using API_auto.helpers;
using API_auto.mappers;
using API_auto.DTO;
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
        public async Task<OutDocuments> GetResult([FromForm] IncomingData file)
        {
            var sellerResultTask = _service.GetOcrDocument(file.SellerId, ClientType.Seller,file.SellerPhone, file.SellerEmail);
            var buyerResultTask = _service.GetOcrDocument(file.BuyerId, ClientType.Buyer, file.BuyerPhone,file.BuyerEmail);
            var autoResultTask = _autoService.GetOcrAutoDocument(file.AutoId,file.Price, file.PlateNumber);
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

        [HttpPost("manualInput")]
        public OutDocuments ManualInput([FromForm] IncomingData file)
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