using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using API_auto.data;
using API_auto.services;
using API_auto.model;
using Microsoft.OpenApi.Models;
using API_auto.Services;
using API_auto;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
var emailConfig = builder.Configuration
        .GetSection("EmailConfiguration")
        .Get<EmailConfiguration>();
builder.Services.AddSingleton(emailConfig);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(cors =>
{
    cors.AddPolicy(name: MyAllowSpecificOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://vidivici-frontend.azurewebsites.net/", "http://localhost:3001").AllowCredentials().AllowAnyHeader().AllowAnyMethod();
    });


});
builder.Services.AddStripeInfrastructure(builder.Configuration);
builder.Services.AddDbContext<AutoDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));

});
builder.Services.AddIdentityCore<User>().AddRoles<IdentityRole>().AddSignInManager().AddEntityFrameworkStores<AutoDbContext>();
builder.Services.AddAuthentication();
builder.Services.AddAuthorization();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "Jwt auth header",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header
                        },
                        new List<string>()
                    }
                });
});
builder.Services.AddScoped<IEmailSender, EmailSender>();
builder.Services.AddScoped<IdReaderService>();
builder.Services.AddScoped<AutoIdReaderService>();
builder.Services.AddScoped<TokenService>();
builder.Services.AddScoped<UserManager<User>>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();
app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:3000", "https://vidivici-frontend.azurewebsites.net/");
});
app.UseAuthorization();

app.MapControllers();
System.Diagnostics.Trace.TraceInformation("Service started now" + DateTime.Now.ToString());
using var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<AutoDbContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
var userManager = (UserManager<User>)scope.ServiceProvider.GetService(typeof(UserManager<User>));

try
{
    context.Database.Migrate();
}
catch (Exception ex)
{
    logger.LogError(ex, "Problem migrating data");
}
app.Run();

