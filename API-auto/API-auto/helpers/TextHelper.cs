namespace API_auto.helpers
{
    public static class TextHelper
    {
        public static string WithoutDiacritics(string incomingData)
        {
            string data = "ăĂâÂãîÎșȘŞşțȚţ";
            string normalData = "aAaAiaIsSSstTt";
            List<char>  diactrics = new List<char>();
            List<char>  withoutDiactrics = new List<char>();
            diactrics.AddRange(data);
            withoutDiactrics.AddRange(normalData);
            string outData="";
            foreach(char c in incomingData)
            {         
                if(diactrics.Contains(c)) 
                {
                    int index = diactrics.FindIndex(x=>x==c);
                    outData += withoutDiactrics[index];
               
                }
                else{outData+=c;}   
            }
            return outData;
        }

        public static string GetCounty(string address)
        {
            var addressW = WithoutDiacritics(address);
            try
            {
                if(addressW.Contains("Jud. ")) {return addressW.Split("Jud. ")[1].Split(" ")[0];}
                else if (addressW.Contains("Jud.")) {return addressW.Split("Jud.")[1].Split(" ")[0];}
                else if(addressW.Contains("Bucuresti")){return "Bucuresti";}
            }
            catch (System.Exception)
            {
                return "-";            
            }
            return "-";
      
        }

        public static string GetCity(string address)
        {
            var addressW = WithoutDiacritics(address);
            try
            {
                if(addressW.ToLower().Contains("bucuresti")){return "Bucuresti";}
                else if(addressW.ToLower().Contains("mun. ")) {return addressW.Split("Mun. ")[1].Split(" ")[0];}
                else if(addressW.ToLower().Contains("mun.")) {return addressW.Split("Mun.")[1].Split(" ")[0];}
                else if(addressW.ToLower().Contains("ors. ")) {return addressW.Split("Ors. ")[1].Split(" ")[0];}
                else if(addressW.ToLower().Contains("ors.")) {return addressW.Split("Ors.")[1].Split(" ")[0];}
                else if(addressW.ToLower().Contains("com. ")) {return addressW.Split("Com. ")[1].Split(" ")[0];}
                else if(addressW.ToLower().Contains("com.")) {return addressW.Split("Com.")[1].Split(" ")[0];}   
            }
            catch (System.Exception)
            { 
                return "-"; 
            }
            return "-"; 
        }
    
        public static string GetSubCounty(string address)
        {
            var addressW = WithoutDiacritics(address);
            try
            {
                if(addressW.ToLower().Contains("sec. ")){return addressW.Split("Sec. ")[1].Split(" ")[0];}
                else if(addressW.ToLower().Contains("sec.")){return addressW.Split("Sec.")[1].Split(" ")[0];}
                else if(addressW.ToLower().Contains("sat. ")){return addressW.Split("Sat. ")[1].Split(" ")[0];}
                else if(addressW.ToLower().Contains("sat.")){return addressW.Split("Sat.")[1].Split(" ")[0];}
            }
            catch (System.Exception)
            {
                
                return "-"; 
            }
            return "-"; 
        }

        public static string GetStreet(string fullStreet)
        {
            var fullStreetW = WithoutDiacritics(fullStreet);
            try
            {
                if(fullStreetW.Contains("nr. ")){return fullStreetW.Split("nr. ")[0];}
                else if(fullStreetW.Contains("nr.")){return fullStreetW.Split("nr.")[0];}
            }
            catch (System.Exception)
            {
                
                return "-";
            }
            return "-";
        }

        public static string GetStreetNr(string fullStreet)
        {
            var fullStreetW = WithoutDiacritics(fullStreet);
            try
            {
                if(fullStreetW.Contains("nr. ")){return fullStreetW.Split("nr. ")[1];}
                else if(fullStreetW.Contains("nr.")){return fullStreetW.Split("nr.")[1];}
            }
            catch (System.Exception)
            {
                
                return "-";
            }
            return "-";
        }
    }
}