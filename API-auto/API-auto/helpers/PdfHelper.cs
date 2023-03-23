using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.helpers
{
    public static class PdfHelper
    {
        public static string GetPdfBytes()
        {
            byte[] bytes = File.ReadAllBytes("vanzare-cumparare.pdf");
            string file = Convert.ToBase64String(bytes);
            return file;
        }
    }
}