using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.id
{
    public class PostalCode : BaseField
    {
        public PostalCode(string value,ClientType clientType) : base(value)
        {
            XPosition = clientType == ClientType.Seller ? 420 : 420;
            YPosition = clientType == ClientType.Seller ? 663.5 : 546.5;
        }
    }
}