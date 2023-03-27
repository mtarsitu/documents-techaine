using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class Displacement : BaseField
    {
        public Displacement(string value, float confidence) : base(value,confidence)
        {
            XPosition = 254;
            YPosition = 419;
        }
    }
}