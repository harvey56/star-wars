import React, { Component } from 'react';
import { fetchSWpeople } from '../actions/starwarsAction';
import { connect } from 'react-redux';
import axios from 'axios';
//import '../../../public/css/main.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      name:'',
      height:'',
      mass:''
    }

    this.listToArray = this.listToArray.bind(this);

  }

  componentDidMount(){
    //returns the complete list of SW characters from the API request
    //the list is stored in the "charactersList" variable
    this.props.fetchSWpeople();

  }

  //the charactersList variable containing all the 87 SW characters is an object on which I cannot map, so I build an array here
  listToArray(results){
    let arr = [];
    for(let char of results){
      arr.push(char)
    }

    return arr;
  }

  render() {  

    const { charactersList } = this.props;

    //list is an array of objects; each object of the array contains the details of a SW character
    const list = this.listToArray(charactersList);

    const displayAllCharacters = (
      list.map( (character, idx) => {
        return (
          <tr key = {idx}>
            <th scope="row">{ idx }</th>
            <td>{character.name}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
          </tr>
        )
      })
    )

    return (
      <div>
        <nav className = "navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div className = "collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
              <li className = "nav-item active">
                <a className = "nav-link" href="#">Home <span className = "sr-only">(current)</span></a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link disabled" href="#">See the list of Star Wars characters here !</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className = "row d-flex justify-content-center">
          <div className = "">
            <table className = "table table-hover">
              <thead className = "thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Height</th>
                  <th scope="col">Mass</th>
                </tr>
              </thead>
              <tbody>
                { /* the table of Star Wars characters is built dynamically; the "displayAllCharacters" is the result of a mapping of each table's td with a SW character */ }
                { displayAllCharacters } 
              </tbody>
            </table>
            <nav aria-label="navigation">
              <ul className = "pagination d-flex justify-content-between">
                <li className = "page-item"><a className = "page-link" href="#">Previous</a></li>
                <li className = "page-item"><a className = "page-link" href="#">Next</a></li>
              </ul>
            </nav>
          
          <div className = "card">
            <h5 className = "card-header">Star Wars character details below</h5>
            <div className = "card-body">
              <h5 className = "card-title">Name</h5>
              <p className = "card-text">Birth Year</p>
              <p className = "card-text">Gender</p>
              <p className = "card-text">List of films</p>
            </div>
          </div>

          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    charactersList: state.StarWars.charactersList,
  }
}

export default connect(mapStateToProps, { fetchSWpeople })(App);
