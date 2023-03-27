using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class AutoCardId : BaseField
    {
        public AutoCardId(string value, float confidence) : base(value,confidence)
        {
            XPosition = 220;
            YPosition = 397;
        }
    }
}