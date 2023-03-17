using Microsoft.AspNetCore.Mvc;
using API_auto.services;
using Azure.AI.FormRecognizer.DocumentAnalysis;
using API_auto.model;
using API_auto.model.id;
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
        public async Task<IEnumerable<Id>> GetResult([FromForm] IncomingImages file)
        {
            var sellerResult = await _service.GetOcrDocument(file.SellerId, ClientType.Seller);
            // var buyerResult = await _service.GetOcrDocument(file.BuyerId, ClientType.Buyer);
            // var autoResult = await _autoService.GetOcrAutoDocument(file.AutoId);
            List<Id> idDates = new List<Id>{sellerResult};
            
            return idDates;
        }
    }
}