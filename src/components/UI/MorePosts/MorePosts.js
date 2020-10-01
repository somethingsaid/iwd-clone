import React from "react";
import classes from "./MorePosts.module.css";

const MorePostsLink = (props) => {
  return (
    <div className={classes.MorePosts}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.text}
      </a>
      <span>
        {" "}
        <i className="fa fa-long-arrow-right"></i>
      </span>
    </div>
  );
};

export default MorePostsLink;
