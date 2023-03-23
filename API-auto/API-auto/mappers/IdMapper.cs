using API_auto.model;
using API_auto.model.id;
using Azure.AI.FormRecognizer.DocumentAnalysis;

namespace API_auto.mappers
{
    public static class IdMapper
    {
        public static DocumentId GetClientData(AnalyzeResult result, ClientType clientType)
        {
            DocumentId client = new DocumentId();
            
            foreach(System.Collections.Generic.KeyValuePair<string, DocumentField> field in result.Documents[0].Fields)
            {
                if(field.Key == "cnp"){client.cnp.Value =field.Value.Content == null ? "-":field.Value.Content;}
                else if(field.Key == "serial"){client.idSerial.Value = field.Value.Content == null ? "-":field.Value.Content;}
                else if(field.Key == "nr"){client.idNr.Value = field.Value.Content == null ? "-":field.Value.Content;}
                else if(field.Key == "citizen"){client.citizen.Value = field.Value.Content == null ? "-":field.Value.Content;}
                else if(field.Key == "county"){client.county.Value = field.Value.Content == null ? "-":field.Value.Content;}
                else if(field.Key == "afterCounty"){client.subCounty.Value = field.Value.Content == null ? "-":field.Value.Content;}
                // else if(field.Key == "firstName"){client.firstName =  field.Value.Content;}
                // else if(field.Key == "lastName"){client.lastName = field.Value.Content;}
                else if(field.Key == "street")
                {
                    client.street.Value = field.Value.Content == null ? "-":field.Value.Content.Split("nr.")[0];
                    client.streetNr.Value = field.Value.Content == null ? "-":field.Value.Content.Split("nr.")[1];
                }
                else if(field.Key == "block"){client.block.Value = field.Value.Content == null ? "-":field.Value.Content;}
                else if(field.Key == "blockUnit"){client.blockUnit.Value = field.Value.Content == null ? "-":field.Value.Content;}
                else if(field.Key == "floor"){client.floor.Value = field.Value.Content == null ? "-": field.Value.Content;}
                else if(field.Key == "ap"){client.apartament.Value = field.Value.Content == null ? "-": field.Value.Content;}
            }
            
            return client;
        }
    }
}