using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class BuyedWith : BaseField
    {
        public BuyedWith(string value) : base(value)
        {
            XPosition = 225;
            YPosition = 385;
        }
    }
}