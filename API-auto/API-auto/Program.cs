

using API_auto.services;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(cors => {
    cors.AddPolicy(name: MyAllowSpecificOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://vidivici-frontend.azurewebsites.net/","http://localhost:3001").AllowCredentials().AllowAnyHeader().AllowAnyMethod();
    });


});
builder.Services.AddScoped<IdReaderService>();
builder.Services.AddScoped<AutoIdReaderService>();
var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();
app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:3000", "https://vidivici-frontend.azurewebsites.net/") ;
});
app.UseAuthorization();

app.MapControllers();

app.Run();

