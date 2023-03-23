using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.model
{
    public class OutDocuments
    {
        public DocumentId? Seller {get;set;}
        public DocumentId? Buyer {get;set;}
        public AutoId? Auto {get;set;}
    }
}