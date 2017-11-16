import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST,DELETE_POST} from '../actions';
export default function(state={},action){
	switch(action.type){
		case FETCH_POST:
		// const post = action.payload.data;
		// const newState =  {...state};
		// newState[post.id] = post;
		// return newState;

		return {...state, [action.payload.data.id]:action.payload.data};
		case DELETE_POST:
		//after we delete, we return back the updated state object with the deleted posts's id not 
		//present
		return _.omit(state, action.payload);
		case FETCH_POSTS:		
		return _.mapKeys(action.payload.data, 'id')
		default:
		return state;
	}
}