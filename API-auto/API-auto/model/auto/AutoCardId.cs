using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class AutoCardId : BaseField
    {
        public AutoCardId(string value) : base(value)
        {
            XPosition = 220;
            YPosition = 397;
        }
    }
}