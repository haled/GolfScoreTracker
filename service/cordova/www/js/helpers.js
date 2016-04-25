function EmptyHoles(holeCount) {
    holes = [];
    for(i = 1; i <= holeCount; i++) {
	hole = {"Id": i, "HoleNumber": i, "Score": 0};
	holes.push(hole);
    }
    return holes;
}
