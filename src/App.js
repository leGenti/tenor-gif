import React from "react";
import "./styles.css";
import axios from "axios";

import Form from "./components/Form";
import Loading from "./components/Loading";
import Results from "./components/Results";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: {
        loading: false,
        error: false,
        data: []
      }
    };
  }
  getGif = str => {
    this.setState({
      ...this.state.gifs,
      loading: true
    });
    axios
      .get("https://api.tenor.com/v1/search?q=" + str + "&key=3740AK5XA2P4")
      .then(results => {
        console.log(results);
        this.setState({
          gifs: {
            ...this.state.gifs,
            data: [...results.data.results],
            loading: false
          }
        });
        console.log(this.state.gifs.data);
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <h2>Search for GIFS</h2>
        <Form getGif={this.getGif} />
        {this.state.gifs.loading && <Loading />}
        {this.state.gifs.data.length !== 0 && (
          <Results gifs={this.state.gifs.data} />
        )}
      </div>
    );
  }
}
