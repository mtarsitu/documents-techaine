using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_auto.model;
using Azure.AI.FormRecognizer.DocumentAnalysis;
using API_auto.model.id;


namespace API_auto.mappers
{
    public static class AutoMapper
    {
        public static AutoId GetAutoData(AnalyzeResult result)
        {
            AutoId autoId = new AutoId();
            foreach(System.Collections.Generic.KeyValuePair<string, DocumentField> field in result.Documents[0].Fields)
            {
                if(field.Key == "mark"){autoId.mark.Value = field.Value.Content != null ? field.Value.Content : "-";}
                else if(field.Key == "comercialModel"){autoId.model.Value = field.Value.Content != null ? field.Value.Content : "-";}
                else if(field.Key == "vin"){autoId.vin.Value = field.Value.Content != null ? field.Value.Content : "-";}
                else if(field.Key == "motorCm3"){autoId.displacement.Value = field.Value.Content != null ? field.Value.Content : "-";}
                else if(field.Key == "motorSeries"){autoId.motorSerial.Value = field.Value.Content != null ? field.Value.Content : "-";}
                else if(field.Key == "year"){autoId.year.Value = field.Value.Content != null ? field.Value.Content : "-";}
                else{autoId.vin.Value = field.Value.Content != null ? $"EURO {field.Value.Content.Split("E")[1]}" : "-";}
            }
            return autoId;
        }


    }
}