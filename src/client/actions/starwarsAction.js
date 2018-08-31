import axios from 'axios';
import { FETCH_SW_CHARACTERS } from './types';

// create new poll action

export function SWcharacters(charactersList){
	return{
		type: FETCH_SW_CHARACTERS,
		charactersList
	}
}

// action creator to fetch the list of all SW characters

export function fetchSWpeople(){
	return function(dispatch){
		axios.get('https://swapi.co/api/people/')
		  .then(function (response) {
		    dispatch(SWcharacters(response.data.results));;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}