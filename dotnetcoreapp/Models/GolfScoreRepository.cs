using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.IO;
using Newtonsoft.Json;

namespace service.Models
{
  public class GolfScoreRepository
  {
    private static readonly string storageFolder = "./scores/";

    private ReaderWriterLockSlim locker = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);

    public void SaveScores(List<GolfScore> scores)
    {
      locker.EnterWriteLock();
      try
        {
          var fileName = Path.Combine(storageFolder, "golf_scores.txt");
          using(var file = new StreamWriter(fileName, false))
            {
              var serializedScores = JsonConvert.SerializeObject(scores);
              file.Write(serializedScores);
            }
        }
      finally
        {
          locker.ExitWriteLock();
        }
    }

    public List<GolfScore> ReadScores()
    {
      locker.EnterReadLock();
      try
        {
          var fileName = Path.Combine(storageFolder, "golf_scores.txt");
          using (var reader = new StreamReader(fileName))
            {
              var serializedScores = reader.ReadToEnd();
              var scores = JsonConvert.DeserializeObject<List<GolfScore>>(serializedScores);
              return scores;
            }
        }
      finally
        {
          locker.ExitReadLock();
        }
    }
  }
}