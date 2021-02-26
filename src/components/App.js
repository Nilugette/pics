import React from 'react';
import api from '../api/unsplash'
import SearchBar from './SearchBar'


class App extends React.Component {
  state = { images: []}

  onSearchSubmit = async term => {
    const response = await api.get('search/photos', {
      params: { query: term }
    })
    this.setState({ images: response.data.results})
  }

  render() {
    return (
      <div className="ui conainer" style={{ marginTop: '10px'}} >
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} photos
      </div>
    )
  }
}


export default App