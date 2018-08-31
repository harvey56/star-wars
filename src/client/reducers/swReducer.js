import { FETCH_SW_CHARACTERS, FETCH_SW_MOVIES } from '../actions/types';

const defaultState = {
	charactersList: '',
	moviesList: ''

}

export default function(state = defaultState, action){
	switch (action.type){
		case FETCH_SW_CHARACTERS :
			return Object.assign({}, state, {
				charactersList: action.charactersList,
			})	

		case FETCH_SW_MOVIES :
			return Object.assign({}, state, {
				moviesList: action.moviesList,
			})			

		default:
			return state

	}
}