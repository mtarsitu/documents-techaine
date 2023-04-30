using System;
using API_auto.model.Stripe;

namespace API_auto.services
{
    public interface IStripeAppService
    {

        Task<StripeCustomer> AddStripeCustomerAsync(AddStripeCustomer customer, CancellationToken ct);
        Task<StripePayment> AddStripePaymentAsync(AddStripePayment payment, CancellationToken ct);

    }
}