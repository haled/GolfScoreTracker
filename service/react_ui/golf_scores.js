// https://facebook.github.io/react/docs/tutorial.html
// https://facebook.github.io/react/docs/thinking-in-react.html

var Card = React.createClass({
    render: function() {
	return (
		<div className="card">
		  Score Card
		</div>
	);
    }
});

var Name = React.createClass({
    render: function() {
	return (
		<div className="name">
		Name: {this.props.name}
	        </div>
	);
    }
});

var Course = React.createClass({
    render: function() {
	return (
		<div className="course">
		Course: {this.props.course}
	        </div>
	);
    }
});

var Hole = React.createClass({
    render: function() {
	return (
		<div className="hole">
		{this.props.holeNumber}</br>
		{this.props.score}
	        </div>
	);
    }
});

// render the components
ReactDOM.render(
	<Card />,
    document.getElementById('content')
);
