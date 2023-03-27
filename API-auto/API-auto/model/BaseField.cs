using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model
{
    public abstract class BaseField
    {
    
        public double XPosition{get;set;}
        public double YPosition{get;set;}
        public float Confidence{get;set;}
        public string? Value {get;set;}

        public BaseField(string value, float confidence)
        {
            Value = value;
            Confidence = confidence;
        }
    }
}