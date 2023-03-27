using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class ItpExpire : BaseField
    {
        public ItpExpire(string value, float confidence) : base(value,confidence)
        {
            XPosition = 480;
            YPosition = 408;
        }
    }
}