using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using service.Models;
//using Newtonsoft.Json;

namespace service.Controllers
{
    [Route("api/scores")]
    public class ScoresController : Controller
    {
         static List<GolfScore> golfScores = new List<GolfScore>();
      private GolfScoreRepository repository = null;

      public ScoresController()
      {
        try
          {
            repository = new GolfScoreRepository();
            golfScores = repository.ReadScores();
          }
        catch(Exception e)
          {
            Console.Out.WriteLine("Controller=ScoresController,Method=ctor,Exception={0}", e.Message);
          }
      }

        // GET: api/scores
        [HttpGet]
        public IEnumerable<GolfScore> Get()
        {
          Console.Out.WriteLine("Controller=ScoresController,Method=Get,FriendlyMessage='Items in golfScores -> {0}'", golfScores.Count);
          return golfScores;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public GolfScore Get(int id)
        {
          return golfScores.FirstOrDefault(x => x.Id == id);
        }

        // POST api/values
        [HttpPost]
        public int Post([FromBody]GolfScore newScore)
        {
          Console.Out.WriteLine("Controller=ScoresController,Method=Post,FriendlyMessage=String received -> '{0}'", newScore);
          var newId = golfScores.Count + 2;

          try
          {
            Console.Out.WriteLine("Controller=ScoresController,Method=Post,FriendlyMessage=newScore.Id -> {0}", newScore.Id);
            newScore.Id = newId;
            golfScores.Add(newScore);
            Console.Out.WriteLine("Controller=ScoresController,Method=Post,FriendlyMessage='Items in golfScores -> {0}'", golfScores.Count);
            repository.SaveScores(golfScores);
          }
          catch(Exception e)
            {
              Console.Out.WriteLine("Controller=ScoresController,Method=Post,Exception={0}", e.Message);
              // newScore = ManufactureScore();
              // golfScores.Add(newScore);
            }

          return newScore == null ? -1 : newScore.Id;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]GolfScore modifiedScore)
        {
          var existingScore = golfScores.FirstOrDefault(x => x.Id == id);
          existingScore.UpdateMe(modifiedScore);
          repository.SaveScores(golfScores);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
          golfScores.RemoveAll(x => x.Id == id);
        }

      private GolfScore ManufactureScore()
      {
        var newId = golfScores.Count + 2;

        return new GolfScore 
        {
          Id = newId,
          Name = "Test Score " + newId.ToString(),
          CourseName = "Annbriar"
        };
      }
    }
}
