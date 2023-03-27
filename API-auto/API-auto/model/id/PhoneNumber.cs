using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.id
{
    public class PhoneNumber : BaseField
    {
        public PhoneNumber(string value, ClientType clientType, float confidence) : base(value,confidence)
        {
            XPosition = clientType == ClientType.Seller ? 272 : 272;
            YPosition = clientType == ClientType.Seller ? 629.8 : 512.5;
        }
    }
}