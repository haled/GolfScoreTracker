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
	scores.push(currentScore);
    }
    return scores;
}

function SaveNewItem(score) {
    var id = storage.length + 2;
    score.Id = id;
    storage.setItem(id, JSON.stringify(score));
}

function SaveItem(score) {
    storage.setItem(score.Id, JSON.stringify(score));
}

function GetScore(id) {
    return JSON.parse(storage.getItem(id));
}
