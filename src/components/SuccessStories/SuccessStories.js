import React, { Component } from "react";
import Spinner from "../UI/Spinner/Spinner";
import axios from "../../axios-functions";

class SuccessStories extends Component {
  state = {
    successStories: [],
  };

  componentDidMount() {
    axios
      .get("/successStories")
      .then((response) => {
        console.log(response.data);
        this.setState({
          successStories: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    let tiles = null;
    if (this.state.successStories.length > 0) {
      tiles = this.state.successStories.map((successStory) => {
        return (
          <div key={successStory.text}>
            <h1>{successStory.text}</h1>
            <p>{successStory.img}</p>
            <p>{successStory.url}</p>
          </div>
        );
      });
    }
    const content = this.state.successStories.length > 0 ? tiles : <Spinner />;

    return <div>{content}</div>;
  }
}

export default SuccessStories;
