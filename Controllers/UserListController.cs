using Microsoft.AspNetCore.Mvc;
using CS575_Final.Model;

namespace CS575_Final.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UserListController : ControllerBase
    {
        private static readonly string[] UsernameAdjectives = new[]
        {
            "Happy", "Sad", "Angry", "Excited", "Nervous", "Curious", "Confident", "Shy", "Brave", "Calm"
        };
        private static readonly string[] UsernameNouns = new[]
        {
            "Cat", "Dog", "House", "Car", "Tree", "Book", "Phone", "Computer", "Chair", "Table"
        };
        private static readonly string[] EmailNames = new[]
        {
            "John", "Jane", "Bob", "Sally", "Joe", "Mary", "Bill", "Jill", "Jack", "Jen"
        };
        private static readonly string[] EmailEndings = new[]
        {
            "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "protonmail.com", "zoho.com", "icloud.com", "mail.com", "yandex.com"
        };

        private readonly ILogger<UserListController> _logger;

        public UserListController(ILogger<UserListController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return Enumerable.Range(1, 10).Select(index => new User
            {
                email = EmailNames[Random.Shared.Next(EmailNames.Length)]
                 + "@" + EmailEndings[Random.Shared.Next(EmailEndings.Length)],
                username = UsernameAdjectives[Random.Shared.Next(UsernameAdjectives.Length)]
                 + UsernameNouns[Random.Shared.Next(UsernameNouns.Length)],
            })
            .ToArray();
        }
    }
}