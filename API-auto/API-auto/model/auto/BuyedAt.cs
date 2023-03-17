using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class BuyedAt : BaseField
    {
        public BuyedAt(string value) : base(value)
        {
            XPosition = 55;
            YPosition = 385;
        }
    }
}