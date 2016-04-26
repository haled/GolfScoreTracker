function EmptyHoles(holeCount) {
    holes = [];
    for(i = 1; i <= holeCount; i++) {
	hole = {"Id": i, "HoleNumber": i, "Score": 0};
	holes.push(hole);
    }
    return holes;
}

var storage = window.localStorage;

/*
localStorage.setItem('myCat', 'Tom');


*/

function GetAllScores() {
    var scores = [];
    for(var i = 0; i < storage.length; i++) {
	var currentScore = JSON.parse(storage.getItem(storage.key(i)));
	alert(currentScore.CourseName);
	scores.push(currentScore);
    }
    return scores;
}

function SaveItem(score) {
    var id = storage.length + 2;
    score.Id = id;
    storage.setItem(id, JSON.stringify(score));
}
