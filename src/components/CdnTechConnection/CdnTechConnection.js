import React from "react";
import ActionButton from "../UI/ActionButton/ActionButton";

import classes from "./CdnTechConnection.module.css";

import { canadianTechConnection } from "../../assets/imgs";

const CdnTechConnection = () => {
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
          <source
            media="(min-width: 991px)"
            type="image/png"
            srcSet={canadianTechConnection.srcSet}
          />
          <img
            // style={style}
            src={canadianTechConnection.defaultImg}
            alt="The Canadian Tech Connection"
          />
        </picture>
      </div>
    </div>
  );
};

export default CdnTechConnection;
