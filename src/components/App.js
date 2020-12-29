import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieDetails from './MovieDetails'
import axios from 'axios';
class App extends Component {
  state={images:[]}
  onSubmitSearch = async (term) => {
    const response=await axios.get('http://www.omdbapi.com/',{
      params:{
        apikey: '2f132aa9',
        s:term
      }
    })
    console.log(response)
    this.setState({images:response.data.Search})
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmitSearch} />
        <MovieDetails images={this.state.images}/>
      </div>
    );
  }
}

export default App;
