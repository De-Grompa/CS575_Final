using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CS575_Final.Model;

namespace CS575_Final.Model
{
    public class MovieContext : DbContext
    {
        public MovieContext()
        {
        }

        public MovieContext(DbContextOptions<MovieContext> options)
            : base(options)
        {
            Console.WriteLine("Connection string: " + options);
        }
        public DbSet<Movie>? Movies { get; set; }
    }
}