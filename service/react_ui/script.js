// To get started with this tutorial running your own code, simply remove
// the script tag loading scripts/example.js and start writing code here.
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
            <h1>Comments</h1>
	    <CommentList data={this.props.data} />
	    <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
    render: function() {
	var commentNodes = this.props.data.map(function(comment) {
	    return (
		    <Comment author={comment.author} key={comment.id}>
		    {comment.text}
		</Comment>
	    );
	});
	return (
		<div className="commentList">
		{commentNodes}
	    </div>
	);
    }
});

var CommentForm = React.createClass({
    render: function() {
	return (
		<div className="commentForm">
		Hello, world!  I am a CommentForm.
		</div>
	);
    }
});

var Comment = React.createClass({
    render: function() {
	return (
		<div className="comment">
		    <h2 className="commentAuthor">
	        	{this.props.author}
	            </h2>
		    {this.props.children}
		</div>
	);
    }
});

var data = [
    {id: 1, author: "John Doe", text: "A really special comment from John."},
    {id: 2, author: "Jane Smith", text: "Jane's comment."}
];

// render the components
ReactDOM.render(
	<CommentBox data={data}/>,
  document.getElementById('content')
);
