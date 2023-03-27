using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class Euro : BaseField
    {
        public Euro(string value, float confidence) : base(value,confidence)
        {
            XPosition = 475;
            YPosition = 397;
        }
    }
}