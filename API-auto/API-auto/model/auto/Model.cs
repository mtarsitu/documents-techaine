using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class Model : BaseField
    {
        public Model(string value, float confidence) : base(value, confidence)
        {
            XPosition = 288;
            YPosition = 431;
        }
    }
}