using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using LuckyProject_API.Entities;

namespace LuckyProject_API
{
    public partial class Base_testContext : DbContext
    {
        public virtual DbSet<Car> Car { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Utilisateur> Utilisateur { get; set; }

        // Unable to generate entity type for table 'dbo.Table_test'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=servertest1234.database.windows.net;Database=Base_test;user id=user_admin;password=e4g5G2ce;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>(entity =>
            {
                entity.Property(e => e.Color).HasColumnType("varchar(50)");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Model).HasColumnType("varchar(50)");

                entity.Property(e => e.Name).HasColumnType("varchar(50)");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Libelle).HasMaxLength(50);

                entity.Property(e => e.Prix).HasColumnType("numeric");

                entity.Property(e => e.Quantite).HasColumnType("numeric");
            });

            modelBuilder.Entity<Utilisateur>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.Nom)
                    .HasColumnName("nom")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Prenom)
                    .HasColumnName("prenom")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Ville)
                    .HasColumnName("ville")
                    .HasColumnType("varchar(255)");
            });
        }
    }
}