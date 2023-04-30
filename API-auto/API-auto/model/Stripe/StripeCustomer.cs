using System;

namespace API_auto.model.Stripe
{
    public record StripeCustomer(
		string Name,
		string Email,
		string CustomerId);
}