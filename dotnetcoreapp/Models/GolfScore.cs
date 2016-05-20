using System.Collections.Generic;

namespace service.Models
{
  public class GolfScore
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string CourseName { get; set; }
    public List<HoleScore> HoleScores { get; set; }

    public void UpdateMe(GolfScore modifiedScore)
    {
      Name = modifiedScore.Name;
      CourseName = modifiedScore.CourseName;
      HoleScores = modifiedScore.HoleScores;
    }
  }
}