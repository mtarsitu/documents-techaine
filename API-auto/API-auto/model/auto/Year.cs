using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class Year : BaseField
    {
        public Year(string value, float confidence) : base(value,confidence)
        {
            XPosition = 360;
            YPosition = 397;
        }
    }
}