import React from "react";

const Logo = () => {
  // TODO: see comment about urls in CdnTechConnection
  const defaultImg =
    "https://www.intelliware.com/wp-content/uploads/2019/08/IWD-Logo-Mobile_86b2731d8043c0f45bdc89b8b81e1562.png?x29699";
  const largeImg =
    "https://www.intelliware.com/wp-content/uploads/2019/08/IWD-Logo_a0fe9ddf23461f4a15fe6ff63679269a.png?x29699";
  const style = { maxWidth: "180px" };

  return (
    <picture>
      <source media="(min-width: 991px)" type="image/png" srcSet={largeImg} />
      <img
        style={style}
        src={defaultImg}
        alt="Intelliware Development Inc. Logo"
      />
    </picture>
  );
};

export default Logo;
