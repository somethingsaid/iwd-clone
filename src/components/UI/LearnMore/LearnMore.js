import React from "react";

const learnMore = (props) => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#007cba", textDecoration: "none" }}
    >
      Learn More
    </a>
  );
};

export default learnMore;
