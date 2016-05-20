using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using service.Models;

namespace service.Controllers
{
    [Route("api/scores/{scoreId}/holes")]
    public class HoleScoresController : Controller
    {
      private GolfScoreRepository repository = null;

      public HoleScoresController()
      {
        repository = new GolfScoreRepository();
      }

      [HttpGet]
      public IEnumerable<HoleScore> Get(int scoreId)
      {
        GolfScore golfScore = null;

        Console.WriteLine("Controller=HoleScoresController,Method=Get,FriendlyMessage='Trying to get hole scores for score ID {0}'", scoreId);
        try
        {
          golfScore = repository.ReadScores().FirstOrDefault(x => x.Id == scoreId);
          Console.WriteLine("Controller=HoleScoresController,Method=Get,FriendlyMessage='Have {0} holes for score ID {1}'", golfScore.HoleScores.Count, golfScore.Id);
        }
        catch(Exception e)
        {
          Console.WriteLine("Controller=HoleScoresController,Method=Get,FriendlyMessage='Exception Occurred with message => {0}'", e.Message);
        }

        return golfScore != null ? golfScore.HoleScores : new List<HoleScore>();
      }

      [HttpGet("{holeNum}")]
      public HoleScore Get(int scoreId, int holeNum)
      {
        HoleScore holeScore = null;

          var golfScore = repository.ReadScores().FirstOrDefault(x => x.Id == scoreId);
          if(golfScore != null)
          {
            holeScore = golfScore.HoleScores.FirstOrDefault(h => h.HoleNumber == holeNum);
          }

          return holeScore != null ? holeScore : new HoleScore();
      }

      [HttpPost]
      public IEnumerable<HoleScore> Post(int scoreId, [FromBody] List<HoleScore> holeScores)
      {
        Console.Out.WriteLine("Controller=HoleScoresController,Method=Post,HoleCount={0}", holeScores.Count);
        var golfScores = repository.ReadScores();
        var golfScore = golfScores.FirstOrDefault(x => x.Id == scoreId);
        golfScore.HoleScores = holeScores;
        repository.SaveScores(golfScores);
        return golfScore.HoleScores;
      }
    }
}