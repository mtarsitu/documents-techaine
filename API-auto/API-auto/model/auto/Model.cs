using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class Model : BaseField
    {
        public Model(string value) : base(value)
        {
            XPosition = 298;
            YPosition = 431;
        }
    }
}