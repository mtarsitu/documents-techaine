using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model.auto
{
    public class LetterPrice : BaseField
    {
        public LetterPrice(string value, float confidence) : base(value, confidence)
        {
            XPosition = 280;
            YPosition = 368;
        }
    }
}