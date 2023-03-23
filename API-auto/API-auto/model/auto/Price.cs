using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class Price : BaseField
    {
        public Price(string value) : base(value)
        {
            XPosition = 140;
            YPosition = 368;
        }
    }
}