using API_auto.model;
using MobilpayEncryptDecrypt;
using API_auto.helpers;
public partial class _Default
{
    public string signature = "XFH8-G54J-1D3Q-CCAT-6SCT";
    //public string service = "service";
    public string yourtransactionId = "114";
    public string yourtransactiontype = "Card";
    public decimal youramount = 1;
    public string yourcurrency = "RON";
    public string yourdetails = "details";
    public string urlMobilPay = "http://sandboxsecure.mobilpay.ro";
    protected void Page_Load(Payment sender)
    {

    }
    public void btnPay_Click(Payment sender)
    {
        try
        {
            MobilpayEncrypt encrypt = new MobilpayEncrypt();

            Mobilpay_Payment_Request_Card card = new Mobilpay_Payment_Request_Card();
            Mobilpay_Payment_Invoice invoice = new Mobilpay_Payment_Invoice();
            Mobilpay_Payment_Address billing = new Mobilpay_Payment_Address();
            Mobilpay_Payment_Address shipping = new Mobilpay_Payment_Address();
            Mobilpay_Payment_Invoice_Item itmm = new Mobilpay_Payment_Invoice_Item();
            Mobilpay_Payment_Invoice_Item itmm1 = new Mobilpay_Payment_Invoice_Item();
            Mobilpay_Payment_ItemCollection itmColl = new Mobilpay_Payment_ItemCollection();
            Mobilpay_Payment_Exchange_RateCollection exColl = new Mobilpay_Payment_Exchange_RateCollection();
            Mobilpay_Payment_Exchange_Rate ex = new Mobilpay_Payment_Exchange_Rate();
            Mobilpay_Payment_Request_Contact_Info ctinfo = new Mobilpay_Payment_Request_Contact_Info();
            Mobilpay_Payment_Confirm conf = new Mobilpay_Payment_Confirm();
            Mobilpay_Payment_Request_Url url = new Mobilpay_Payment_Request_Url();

            MobilpayEncryptDecrypt.MobilpayEncryptDecrypt encdecr = new MobilpayEncryptDecrypt.MobilpayEncryptDecrypt();
            card.OrderId = yourtransactionId;
            card.Type = "card";
            card.Signature = signature;
            url.ConfirmUrl = "http://192.168.1.109/TestCard/cardConfirm.aspx";
            url.ReturnUrl = "http://192.168.1.109/TestCard/returnCard.aspx";
            //card.Service = service;
            card.Url = url;
            card.TimeStamp = DateTime.Now.ToString("yyyyMMddhhmmss");
            invoice.Amount = youramount;
            invoice.Currency = yourcurrency;
            invoice.Details = yourdetails;
            billing.FirstName = sender.FirstName;
            billing.LastName = sender.LastName;
            billing.IdentityNumber = sender.IdentityNumber;
            billing.FiscalNumber = sender.FiscalNumber;
            billing.MobilPhone = sender.MobilPhone;
            billing.Type = sender.BillingType;
            billing.ZipCode = sender.ZipCode;
            billing.Iban = sender.Iban;
            billing.Address = sender.Address;
            billing.Bank = sender.Bank;
            billing.City = sender.City;
            billing.Country = sender.Country;
            billing.County = sender.County;
            billing.Email = sender.Email;

            shipping.FirstName = sender.FirstName;
            shipping.LastName = sender.LastName;
            shipping.IdentityNumber = sender.IdentityNumber;
            shipping.FiscalNumber = sender.FiscalNumber;
            shipping.MobilPhone = sender.MobilPhone;
            shipping.Type = sender.BillingType;
            shipping.ZipCode = sender.ZipCode;
            shipping.Iban = sender.Iban;
            shipping.Address = sender.Address;
            shipping.Bank = sender.Bank;
            shipping.City = sender.City;
            shipping.Country = sender.Country;
            shipping.County = sender.County;
            shipping.Email = sender.Email;

            ctinfo.Billing = billing;
            ctinfo.Shipping = shipping;
            invoice.ContactInfo = ctinfo;
            card.Invoice = invoice;
            encrypt.Data = encdecr.GetXmlText(card);
            encrypt.X509CertificateFilePath = @"D:\Projects\key\public.cer";
            encdecr.Encrypt(encrypt);
            System.Collections.Specialized.NameValueCollection coll = new System.Collections.Specialized.NameValueCollection();
            coll.Add("data", encrypt.EncryptedData);
            coll.Add("env_key", encrypt.EnvelopeKey);
            
        }
        catch (Exception ex)
        {
            System.Console.WriteLine(ex);
        }
    }
}

