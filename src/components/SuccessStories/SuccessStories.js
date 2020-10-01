import React, { Component } from "react";
import Spinner from "../UI/Spinner/Spinner";
import SuccessStory from "./SuccessStory/SuccessStory";
import MorePosts from "../UI/MorePosts/MorePosts";
import axios from "../../axios-functions";

import classes from "./SuccessStories.module.css";

class SuccessStories extends Component {
  state = {
    successStories: [],
  };

  componentDidMount() {
    axios
      .get("/successStories")
      .then((response) => {
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
        return <SuccessStory key={successStory.text} {...successStory} />;
      });
    }
    const content = this.state.successStories.length > 0 ? tiles : <Spinner />;

    return (
      <div className={classes.SuccessStories}>
        <h3>Success Stories</h3>
        <div className={classes.content}>{content}</div>
        <MorePosts
          url="https://www.intelliware.com/success-stories/"
          text="More Success Stories"
        />
      </div>
    );
  }
}

export default SuccessStories;
