import React from "react";
import ActionButton from "../UI/ActionButton/ActionButton";
import classes from "./CdnTechConnection.module.css";

// does the course tell you to name them with the first letter as lower case? most of places i've seen react componnents start wth uppercase example CdnTechConnection
const cdnTechConnection = () => {
  // TODO: should move these urls into its own file example Assets.js and all it has a list of urls for content
  const defaultImg =
    "https://www.intelliware.com/wp-content/uploads/2020/06/iw-cntower-1.png";
  const srcSet =
    "https://www.intelliware.com/wp-content/uploads/2020/06/iw-cntower-1.png 300w, https://www.intelliware.com/wp-content/uploads/2020/06/iw-cntower-1.png 1024w, https://www.intelliware.com/wp-content/uploads/2020/06/iw-cntower-1.png 768w, https://www.intelliware.com/wp-content/uploads/2020/06/iw-cntower-1.png 1400w";

  return (
    <div className={classes.CdnTechConnection}>
      <div className={classes.description}>
        <h1>The Canadian Tech Connection</h1>
        <p>
          This guide, written specifically for North American startups and
          technology companies, unpacks the reasons why Canadian cities like
          Toronto might be the best place to look for your ideal development
          partner.
        </p>
        <ActionButton className="primary" btnText="Read More" arrow />
      </div>
      <div className={classes.image}>
        <picture>
          <source media="(min-width: 991px)" type="image/png" srcSet={srcSet} />
          <img
            // style={style}
            src={defaultImg}
            alt="The Canadian Tech Connection"
          />
        </picture>
      </div>
    </div>
  );
};

export default cdnTechConnection;
