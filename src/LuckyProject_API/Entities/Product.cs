using System;
using System.Collections.Generic;

namespace LuckyProject_API
{
    public partial class Product
    {
        public int Id { get; set; }
        public string Libelle { get; set; }
        public decimal? Prix { get; set; }
        public decimal? Quantite { get; set; }
    }
}
