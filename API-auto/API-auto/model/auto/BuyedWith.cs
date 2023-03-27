using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class BuyedWith : BaseField
    {
        public BuyedWith(string value, float confidence) : base(value,confidence)
        {
            XPosition = 225;
            YPosition = 385;
        }
    }
}