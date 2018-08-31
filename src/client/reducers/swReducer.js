import { FETCH_SW_CHARACTERS } from '../actions/types';

const defaultState = {
	charactersList: '',

}

export default function(state = defaultState, action){
	switch (action.type){
		case FETCH_SW_CHARACTERS :
			return Object.assign({}, state, {
				charactersList: action.charactersList,
			})		

		default:
			return state

	}
}