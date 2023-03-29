using Azure;
using Azure.AI.FormRecognizer.DocumentAnalysis;
using API_auto.helpers;
using API_auto.model;
using API_auto.mappers;

namespace API_auto.services
{
    public class AutoIdReaderService
    {
        private static string endPoint ="https://auto-reader.cognitiveservices.azure.com/";
        private static string apiKey = "60bb27542ef54ae8b7c6a1b06804e5dc";
        private static AzureKeyCredential credential = new AzureKeyCredential(apiKey);
        private static DocumentAnalysisClient client = new DocumentAnalysisClient(new Uri(endPoint),credential);

        public async Task<AutoId> GetOcrAutoDocument(IFormFile image, double price, string plateNumber)
        {
            
            var stream = ImageHelper.GetStreamPicture(image);
            AnalyzeDocumentOperation operation = await client.AnalyzeDocumentAsync(WaitUntil.Completed,"techaine-v1-auto",stream);
            AnalyzeResult result = operation.Value;
            AutoId autoIdData = AutoMapper.GetAutoData(result,price, plateNumber);

            return autoIdData;
        }
    }
}