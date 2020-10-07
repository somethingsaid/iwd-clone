import React from "react";

import { logo } from "../../assets/imgs";

const Logo = () => {
  const style = { maxWidth: "180px" };

  return (
    <picture>
      <source
        media="(min-width: 991px)"
        type="image/png"
        srcSet={logo.largeImg}
      />
      <img
        style={style}
        src={logo.defaultImg}
        alt="Intelliware Development Inc. Logo"
      />
    </picture>
  );
};

export default Logo;
