using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class PlateNumber : BaseField
    {
        public PlateNumber(string value, float confidence) : base(value,confidence)
        {
            XPosition = 224;
            YPosition = 408;
        }
    }
}