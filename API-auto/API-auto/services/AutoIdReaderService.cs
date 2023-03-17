using Azure;
using Azure.AI.FormRecognizer.DocumentAnalysis;
using API_auto.helpers;
using API_auto.model;
using API_auto.mappers;

namespace API_auto.services
{
    public class AutoIdReaderService
    {
        private static string endPoint ="https://id-techaine.cognitiveservices.azure.com/";
        private static string apiKey = "ad27af40b0f9433fafb77fc6ea02e6ce";
        private static AzureKeyCredential credential = new AzureKeyCredential(apiKey);
        private static DocumentAnalysisClient client = new DocumentAnalysisClient(new Uri(endPoint),credential);

        public async Task<AutoId> GetOcrAutoDocument(IFormFile image)
        {
            
            var stream = ImageHelper.GetStreamPicture(image);
            AnalyzeDocumentOperation operation = await client.AnalyzeDocumentAsync(WaitUntil.Completed,"techaine-v1-autoId",stream);
            AnalyzeResult result = operation.Value;
            AutoId autoIdData = AutoMapper.GetAutoData(result);

            return autoIdData;
        }
    }
}