import React from "react";

const Logos = ({ logo }) => {
  let src = "";
  //const njd = require("./logos/njd.png");
  if (logo.toLowerCase().trim() === "njd") {
    src = "/assets/img/njd.png";
  } else if (logo.toLowerCase().trim() === "nyi") {
    src = "/assets/img/nyi.png";
  } else if (logo.toLowerCase().trim() === "nyr") {
    src = "/assets/img/nyr.png";
  } else if (logo.toLowerCase().trim() === "phi") {
    src = "/assets/img/phi.png";
  } else if (logo.toLowerCase().trim() === "pit") {
    src = "/assets/img/pit.png";
  } else if (logo.toLowerCase().trim() === "bos") {
    src = "/assets/img/bos.png";
  } else if (logo.toLowerCase().trim() === "buf") {
    src = "/assets/img/buf.png";
  } else if (logo.toLowerCase().trim() === "mtl") {
    src = "/assets/img/mtl.png";
  } else if (logo.toLowerCase().trim() === "ott") {
    src = "/assets/img/ott.png";
  } else if (logo.toLowerCase().trim() === "tor") {
    src = "/assets/img/tor.png";
  } else if (logo.toLowerCase().trim() === "car") {
    src = "/assets/img/car.png";
  }
  console.log(src);
  return (
    <img
      src={`${src}`}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "20px",
        marginLeft: "3%",
      }}
    />
  );
};

export default Logos;
