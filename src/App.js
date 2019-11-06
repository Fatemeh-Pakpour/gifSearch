import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import GifList from "./components/GifList";
import SearchForm from "./components/SearchForm";

class App extends Component {
  state = {
    gifs: [],
    loading: true
  };
  componentDidMount() {
    this.performSearch();
  }
  performSearch = (query = "dog") => {
    const api_key = "IYgRlVgzfHVNLpy1XEsunbC9Tya21NJQ";
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=24&offset=0&rating=G&lang=en`
      )
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <GifList data={this.state.gifs} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
