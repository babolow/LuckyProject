using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LuckyProject_API.Entities;
using Newtonsoft.Json;

namespace LuckyProject_API.Controllers
{
    [Route("api/car")]
    public class CarController : Controller
    {
        // GET api/values
        [HttpGet]
        public IList<Car> Get()
        {
            Base_testContext ctx = null;
            try
            {
                ctx = new Base_testContext();
                return ctx.Car.ToList();
            }
            finally
            {
                ctx.Dispose();
            }
      
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            Base_testContext ctx = null;
            try
            {
                ctx = new Base_testContext();
                Car car = ctx.Car.Find(id);
                return (car != null) ? car.Name : "404 : Car not found";
            }
            finally
            {
                ctx.Dispose();
            }
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
            Car car = JsonConvert.DeserializeObject<Car>(value);
            Base_testContext ctx = null;
            try
            {
                ctx = new Base_testContext();
                ctx.Add(car);
                ctx.SaveChanges();
            }
            finally
            {
                ctx.Dispose();
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
