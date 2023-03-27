using API_auto.model;
using API_auto.model.id;
using Azure.AI.FormRecognizer.DocumentAnalysis;
using API_auto.helpers;
namespace API_auto.mappers
{
    public static class IdMapper
    {
        public static DocumentId GetClientData(AnalyzeResult result, ClientType clientType)
        {
            DocumentId client = new DocumentId();
            string fullName = "";
            float conf=0;
            foreach(System.Collections.Generic.KeyValuePair<string, DocumentField> field in result.Documents[0].Fields)
            {
                if(field.Key == "Cnp"){client.cnp = field.Value.Content == null ? new Cnp("-",clientType,0.6f) :new Cnp(TextHelper.WithoutDiacritics(field.Value.Content),clientType,(float)field.Value.Confidence);}
                else if(field.Key == "IdSerial"){client.idSerial = field.Value.Content == null ? new IdSerial("-",clientType,0.6f): new IdSerial(TextHelper.WithoutDiacritics(field.Value.Content),clientType,(float)field.Value.Confidence);}
                else if(field.Key == "IdNr"){client.idNr = field.Value.Content == null ? new IdNr("-",clientType,0.6f): new IdNr(TextHelper.WithoutDiacritics(field.Value.Content),clientType,(float)field.Value.Confidence);}
                else if(field.Key == "FirstName")
                    {
                        fullName += TextHelper.WithoutDiacritics($"{field.Value.Content} ");
                        conf += (float)field.Value.Confidence;
                    }
                else if(field.Key == "LastName")
                    {
                        fullName +=  TextHelper.WithoutDiacritics($"{field.Value.Content}");
                        conf += (float)field.Value.Confidence;
                    }
                else if(field.Key == "Citizen"){client.citizen= field.Value.Content == null ? new Citizien("-",clientType,0.6f):new Citizien(TextHelper.WithoutDiacritics(field.Value.Content),clientType,(float)field.Value.Confidence);}
                else if(field.Key == "Adress")
                {
                    client.county= field.Value.Content == null ? new County("-",clientType, 0.6f): new County(TextHelper.GetCounty(field.Value.Content),clientType, (float)field.Value.Confidence);
                    client.city = field.Value.Content == null ? new City("-",clientType, 0.6f) : new City(TextHelper.GetCity(field.Value.Content),clientType, (float)field.Value.Confidence);
                    client.subCounty = field.Value.Content == null ? new SubCounty("-",clientType, 0.6f) :new SubCounty(TextHelper.GetSubCounty(field.Value.Content),clientType, (float)field.Value.Confidence);
                    ;}
                else if(field.Key == "Street"){client.street = field.Value.Content == null ? new Street("-",clientType,0.6f): new Street(TextHelper.WithoutDiacritics(field.Value.Content),clientType,(float)field.Value.Confidence);}
                else if(field.Key == "StreetNr"){client.streetNr= field.Value.Content == null ? new Streetnumber("-",clientType, 0.6f) : new Streetnumber(TextHelper.GetStreetNr(field.Value.Content),clientType,(float)field.Value.Confidence);}
                else if(field.Key == "Block"){client.block = field.Value.Content == null ? new Block("-",clientType,0.8f):new Block(TextHelper.WithoutDiacritics(field.Value.Content),clientType,(float)field.Value.Confidence);}
                else if(field.Key == "BlockUnit"){client.blockUnit = field.Value.Content == null ? new BlockUnit("-",clientType,0.8f): new BlockUnit(TextHelper.WithoutDiacritics(field.Value.Content),clientType,(float)field.Value.Confidence);}
                else if(field.Key == "Floor"){client.floor = field.Value.Content == null ? new Floor("-",clientType,0.8f): new Floor(TextHelper.WithoutDiacritics(field.Value.Content),clientType,(float)field.Value.Confidence);}
                else if(field.Key == "Apartament"){client.apartament= field.Value.Content == null ? new Apartament("-",clientType,0.8f): new Apartament(TextHelper.WithoutDiacritics(field.Value.Content),clientType,(float)field.Value.Confidence);}
            }
            client.postalCode = new PostalCode("-",clientType,0.6f);
            client.email = new Email("-",clientType,0.6f);
            client.phoneNumber = new PhoneNumber("-",clientType,0.6f);
            client.fullName = new FullName(fullName,clientType,conf/2);
            return client;
        }
    }
}