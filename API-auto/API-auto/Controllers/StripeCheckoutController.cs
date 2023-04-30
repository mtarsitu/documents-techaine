using Microsoft.AspNetCore.Mvc;
using Stripe.Checkout;

namespace API_auto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StripeCheckoutController : Controller
    {
        private readonly ILogger<StripeCheckoutController> _logger;

        public StripeCheckoutController(ILogger<StripeCheckoutController> logger)
        {
            _logger = logger;
        }

        [HttpPost("create")]
        public ActionResult Create()
        {
            var domain = "http://localhost:3000";
            var options = new SessionCreateOptions
            {
                LineItems = new List<SessionLineItemOptions>
                {
                  new SessionLineItemOptions
                  {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    Price = "price_1MtmPcAyEEMjDvTN63dmKnuO",
                    Quantity = 1,
                  },
                },
                PaymentMethodTypes = new List<string>(){
                    "card"
                },
                Mode = "payment",
                SuccessUrl = domain + "/contract",
                CancelUrl = domain + "?canceled=true",
                // AutomaticTax = new SessionAutomaticTaxOptions { Enabled = true },
            };
            var service = new SessionService();
            Session session = service.Create(options);

            Response.Headers.Add("Location", session.Url);
            return new StatusCodeResult(303);
        }
    }
}