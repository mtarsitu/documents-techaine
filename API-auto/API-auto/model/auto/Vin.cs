using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class Vin : BaseField
    {
        public Vin(string value, float confidence) : base(value,confidence)
        {
            XPosition = 440;
            YPosition = 431;
        }
    }
}