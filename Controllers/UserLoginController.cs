using Microsoft.AspNetCore.Mvc;
using CS575_Final.Model;

namespace CS575_Final.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserLoginController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] User loginData)
        {
            // validate login data
            if (loginData.username == "validUsername" && loginData.password == "validPassword")
            {
                // return successful login response
                return Ok(new { message = "Login successful" });
            }
            else
            {
                // return failed login response
                return BadRequest(new { message = "Invalid username or password" });
            }
        }
    }
}
