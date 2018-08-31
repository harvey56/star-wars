import axios from 'axios';
import { FETCH_SW_CHARACTERS, FETCH_SW_MOVIES } from './types';

// list of movie characters

export function SWcharacters(charactersList){
	return{
		type: FETCH_SW_CHARACTERS,
		charactersList
	}
}

// action creator to fetch the list of all SW characters

export function fetchSWpeople(pageID){
	return function(dispatch){
		axios.get(`https://swapi.co/api/people/?page=${pageID}`)
		  .then(function (response) {
		    dispatch(SWcharacters(response.data.results));;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}

// list of movie titles

export function SWmovies(moviesList){
	return{
		type: FETCH_SW_MOVIES,
		moviesList
	}
}

// action creator to fetch the list of all movies a specific character has played in

export function fetchFilmsList(characterURL){
	return async function(dispatch){

		const titlesList = [];
		const filmsURLs = await axios.get(characterURL).then( res => res.data.films );

		//const film1 = await axios.get(filmsURLs[0]).then( res => res.data.title)
		const filmList = await Promise.all(filmsURLs.map(async film => {
			let filmTitle = await axios.get(film).then( res => res.data.title);
			titlesList.push(filmTitle);			
		}))

		//the titlesList array will contain the list of movie titles the character refered to in characterURL has played in
		dispatch(SWmovies(titlesList));
						
	} 
	
}