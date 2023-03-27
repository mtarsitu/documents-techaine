using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.id
{
    public class Email : BaseField
    {
        public Email(string value, ClientType clientType, float confidence) : base(value,confidence)
        {
            XPosition = clientType == ClientType.Seller ? 382 : 382;
            YPosition = clientType == ClientType.Seller ? 629.8 : 512.5;
        }
    }
}