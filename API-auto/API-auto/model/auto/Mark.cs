using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class Mark : BaseField
    {
        public Mark(string value) : base(value)
        {
            XPosition = 165;
            YPosition = 431;
        }
    }
}