using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;
using API_auto.model;
using MimeKit;
using MailKit.Net.Smtp;

namespace API_auto.services
{
    public class EmailSender:IEmailSender
    {
        private readonly EmailConfiguration _emailConfig;
        public EmailSender(EmailConfiguration emailConfig)
    {
        _emailConfig = emailConfig;
    }
    public async Task SendEmail(Message message)
    {
        var emailMessage = CreateEmailMessage(message);
        await Send(emailMessage);
    }
    private MimeMessage CreateEmailMessage(Message message)
    {
        var emailMessage = new MimeMessage();
        emailMessage.From.Add(new MailboxAddress("autocontract.ro",_emailConfig.From));
        emailMessage.To.AddRange(message.To);
        emailMessage.Subject = message.Subject;
        emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Text) { Text = message.Content };
        byte[] img;
        var bodyBuilder = new BodyBuilder { HtmlBody = string.Format("<h2 style='color:red;'>{0}</h2>", message.Content) };
        if(message.Logo != null )
        {
            using(var ms = new MemoryStream())
            {
                message.Logo.CopyTo(ms);
                img = ms.ToArray();
            }
            bodyBuilder.Attachments.Add(message.Logo.FileName,img,ContentType.Parse(message.Logo.ContentType));
        }
        emailMessage.Body = bodyBuilder.ToMessageBody();
        return emailMessage;
    }
    private async Task Send(MimeMessage mailMessage)
    {
        using (var client = new SmtpClient())
        {
            try
            {
                await client.ConnectAsync(_emailConfig.SmtpServer, _emailConfig.Port, true);
                client.AuthenticationMechanisms.Remove("XOAUTH2");
                await client.AuthenticateAsync(_emailConfig.UserName, _emailConfig.Password);
                await client.SendAsync(mailMessage);
            }
            catch
            {
                //log an error message or throw an exception or both.
                throw;
            }
            finally
            {
                await client.DisconnectAsync(true);
                client.Dispose();
            }
        }
    }
    }
}