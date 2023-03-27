using API_auto.model;
using Azure.AI.FormRecognizer.DocumentAnalysis;
using API_auto.model.auto;
using API_auto.helpers;

namespace API_auto.mappers
{
    public static class AutoMapper
    {
        public static AutoId GetAutoData(AnalyzeResult result, double price)
        {
            AutoId autoId = new AutoId();
            foreach(System.Collections.Generic.KeyValuePair<string, DocumentField> field in result.Documents[0].Fields)
            {
                if(field.Key == "mark"){autoId.mark = field.Value.Content != null ? new Mark(field.Value.Content,(float)field.Value.Confidence) : new Mark("-",0.6f);}
                else if(field.Key == "comercialModel"){autoId.model = field.Value.Content  != null ? new Model(field.Value.Content,(float)field.Value.Confidence) : new Model("-",0.6f);}
                else if(field.Key == "vin"){autoId.vin = field.Value.Content != null ? new Vin(field.Value.Content,(float)field.Value.Confidence) : new Vin("-",0.6f);}
                else if(field.Key == "motorCm3"){autoId.displacement = field.Value.Content != null ? new Displacement(field.Value.Content, (float)field.Value.Confidence): new Displacement("-",0.6f);}
                else if(field.Key == "motorSeries"){autoId.motorSerial = field.Value.Content != null ? new MotorSerial(field.Value.Content,(float)field.Value.Confidence) : new MotorSerial("-",0.6f);}
                else if(field.Key == "year"){autoId.year = field.Value.Content != null ? new Year(field.Value.Content,(float)field.Value.Confidence) : new Year("-",0.6f);}
                else if(field.Key == "euro"){autoId.euro = field.Value.Content != null ? new Euro(field.Value.Content,(float)field.Value.Confidence) : new Euro("-",0.6f);}
            }
            autoId.price = new Price(price.ToString(),0.8f);
            autoId.letterPrice = new LetterPrice(PriceHelper.ConversieNumarIntreg((int)price),0.8f);
            autoId.autoCardId = new AutoCardId("-",0.6f);
            autoId.plateNumber = new PlateNumber("-",0.6f);
            autoId.itpExpire = new ItpExpire("-",0.6f);
            autoId.buyedAt = new BuyedAt("-",0.6f);
            autoId.buyedWith = new BuyedWith("-",0.6f);
            return autoId;
        }
        

    }
}