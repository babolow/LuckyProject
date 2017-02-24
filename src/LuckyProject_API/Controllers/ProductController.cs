using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace LuckyProject_API.Controllers
{
    [Route("api/product")]
    public class ProductController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IList<Product> Get()
        {
            Base_testContext ctx = null;
            try
            {
                ctx = new Base_testContext();
                return ctx.Product.ToList();
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
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Product product)
        {
            Base_testContext ctx = null;
            try
            {
                ctx = new Base_testContext();

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
