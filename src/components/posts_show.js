import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from '../actions';
class PostsShow extends Component{
componentDidMount(){
	//fetching the id from the url

	//checking this condition to avoid multiple network calls
	//as the first network call already loads all the posts
	//so we dont need to make a call when we click on a specific post
	if(!this.props.post){
	const {id} = this.props.match.params;
	this.props.fetchPost(id);
	}
	
}

onDeleteClick(){
	const {id} = this.props.match.params;
	this.props.deletePost(id,()=>{

		this.props.history.push('/');
	});
}
render(){
const {post} = this.props;
console.log(this.props)
if(!post){
	return <div>Loading...</div>
}

	return (
		<div>
		<Link to="/">Back to Index</Link>
		<button className="btn btn-danger pull-xs-right"
		onClick={this.onDeleteClick.bind(this)}>
		Delete Post
		</button>
		<h3>{post.title}</h3>
		<h6>Categories:{post.categories}</h6>
		<p>{post.content}</p>
		</div>

		);

}


}
//the second argument to mapStateToProps is the set of data going to the target component
function mapStateToProps({posts}, ownProps){

	return {post:posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchPost, deletePost})(PostsShow);