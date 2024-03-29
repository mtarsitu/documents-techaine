using Azure;
using Azure.AI.FormRecognizer.DocumentAnalysis;
using API_auto.helpers;
using API_auto.model;
using API_auto.mappers;
using API_auto.model.id;
namespace API_auto.services
{
    public class IdReaderService
    {  
        private static string endPoint ="https://id-techaine.cognitiveservices.azure.com/";
        private static string apiKey = "ad27af40b0f9433fafb77fc6ea02e6ce";
        private static AzureKeyCredential credential = new AzureKeyCredential(apiKey);
        private static DocumentAnalysisClient client = new DocumentAnalysisClient(new Uri(endPoint),credential);

        
        public IdReaderService()
        {

        }

        public async Task<DocumentId> GetOcrDocument(IFormFile image, ClientType clientType, string phone, string email)
        {
            
            var stream = ImageHelper.GetStreamPicture(image);
            AnalyzeDocumentOperation operation = await client.AnalyzeDocumentAsync(WaitUntil.Completed,"id-techaine-v8",stream);
            AnalyzeResult result = operation.Value;
            DocumentId buyer = IdMapper.GetClientData(result, clientType, phone, email);

            return buyer;
        }
    }
}