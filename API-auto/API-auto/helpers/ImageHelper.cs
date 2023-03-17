using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_auto.helpers
{
    public static class ImageHelper
    {

        public static Stream GetStreamPicture(IFormFile image)
        {
            Stream document = image.OpenReadStream();
            return document;
        }
        
    }
}