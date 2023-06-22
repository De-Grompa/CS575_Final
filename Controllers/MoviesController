using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using CS575_Final.Model;
using Microsoft.AspNetCore.Cors;

namespace CS575_Final.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class MoviesController : ControllerBase
    {


        [HttpGet]
        public IActionResult Get()
        {
            using (var context = new MovieContext())
            {
                var movies = context.Movies?.Include(m => m.genres).Include(m => m.director).ToList();
                if (movies == null)
                {
                    return NotFound();
                }
                return Ok(movies);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            using (var context = new MovieContext())
            {
                var movie = context.Movies?.Include(m => m.genres).Include(m => m.director).FirstOrDefault(m => m.id == id);
                if (movie == null)
                {
                    return NotFound();
                }
                return Ok(movie);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Movie movie)
        {
            using (var context = new MovieContext())
            {
                context.Movies?.Add(movie);
                context.SaveChanges();
                return CreatedAtAction(nameof(Get), new { id = movie.id }, movie);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Movie movie)
        {
            using (var context = new MovieContext())
            {
                var movieToUpdate = context.Movies?.FirstOrDefault(m => m.id == id);
                if (movieToUpdate == null)
                {
                    return NotFound();
                }
                movieToUpdate.id = movie.id;
                movieToUpdate.imdb_id = movie.imdb_id;
                movieToUpdate.popularity = movie.popularity;
                movieToUpdate.budget = movie.budget;
                movieToUpdate.revenue = movie.revenue;
                movieToUpdate.original_title = movie.original_title;
                movieToUpdate.cast = movie.cast;
                movieToUpdate.homepage = movie.homepage;
                movieToUpdate.director = movie.director;
                movieToUpdate.tagline = movie.tagline;
                movieToUpdate.keywords = movie.keywords;
                movieToUpdate.overview = movie.overview;
                movieToUpdate.runtime = movie.runtime;
                movieToUpdate.genres = movie.genres;
                movieToUpdate.production_companies = movie.production_companies;
                movieToUpdate.release_date = movie.release_date;
                movieToUpdate.vote_count = movie.vote_count;
                movieToUpdate.vote_average = movie.vote_average;
                movieToUpdate.release_year = movie.release_year;
                movieToUpdate.budget_adj = movie.budget_adj;
                movieToUpdate.revenue_adj = movie.revenue_adj;

                context.SaveChanges();
                return NoContent();
            }
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            using (var context = new MovieContext())
            {
                var movie = context.Movies?.FirstOrDefault(m => m.id == id);
                if (movie == null)
                {
                    return NotFound();
                }
                context.Movies?.Remove(movie);
                context.SaveChanges();
                return NoContent();
            }
        }
        
    }
}