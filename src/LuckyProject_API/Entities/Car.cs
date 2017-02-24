using System;
using System.Collections.Generic;

namespace LuckyProject_API
{
    public partial class Car
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Model { get; set; }
        public string Color { get; set; }
        public DateTime? Date { get; set; }
    }
}
