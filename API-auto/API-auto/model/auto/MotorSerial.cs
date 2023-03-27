using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class MotorSerial : BaseField
    {
        public MotorSerial(string value, float confidence) : base(value,confidence)
        {
            XPosition = 100;
            YPosition = 419;
        }
    }
}