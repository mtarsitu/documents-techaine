using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_auto.model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API_auto.data
{
    public class AutoDbContext: IdentityDbContext<User>
    {
        public AutoDbContext(DbContextOptions options)
            :base(options)
        {

        }

        public DbSet<Credits>? Credits {get;set;}

         protected override void OnModelCreating(ModelBuilder builder)
        {
            
            base.OnModelCreating(builder);
            // builder.Entity<Documents>().HasOne(d=>d.Client).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<IdentityRole>().HasData(
                new IdentityRole { Name = "Poweruser", NormalizedName = "POWERUSER" },
                new IdentityRole { Name = "Client", NormalizedName = "Client" }
            );
            
        }
        
    }
}