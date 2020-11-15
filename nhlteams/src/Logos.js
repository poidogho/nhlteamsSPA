import React from "react";

/**
 * Get NHL Teams Logos
 * @function
 * @param {logo}
 */
const Logos = ({ logo }) => {
  let src = "";
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
  } else if (logo.toLowerCase().trim() === "fla") {
    src = "/assets/img/fla.png";
  } else if (logo.toLowerCase().trim() === "tbl") {
    src = "/assets/img/tbl.png";
  } else if (logo.toLowerCase().trim() === "wsh") {
    src = "/assets/img/wsh.png";
  } else if (logo.toLowerCase().trim() === "chi") {
    src = "/assets/img/chi.png";
  } else if (logo.toLowerCase().trim() === "det") {
    src = "/assets/img/det.png";
  } else if (logo.toLowerCase().trim() === "nsh") {
    src = "/assets/img/nsh.png";
  } else if (logo.toLowerCase().trim() === "stl") {
    src = "/assets/img/stl.png";
  } else if (logo.toLowerCase().trim() === "cgy") {
    src = "/assets/img/cgy.png";
  } else if (logo.toLowerCase().trim() === "col") {
    src = "/assets/img/col.png";
  } else if (logo.toLowerCase().trim() === "edm") {
    src = "/assets/img/edm.png";
  } else if (logo.toLowerCase().trim() === "van") {
    src = "/assets/img/van.png";
  } else if (logo.toLowerCase().trim() === "ana") {
    src = "/assets/img/ana.png";
  } else if (logo.toLowerCase().trim() === "ana") {
    src = "/assets/img/ana.png";
  } else if (logo.toLowerCase().trim() === "dal") {
    src = "/assets/img/dal.png";
  } else if (logo.toLowerCase().trim() === "lak") {
    src = "/assets/img/lak.png";
  } else if (logo.toLowerCase().trim() === "sjs") {
    src = "/assets/img/sjs.png";
  } else if (logo.toLowerCase().trim() === "cbj") {
    src = "/assets/img/cbj.png";
  } else if (logo.toLowerCase().trim() === "min") {
    src = "/assets/img/min.png";
  } else if (logo.toLowerCase().trim() === "wpg") {
    src = "/assets/img/wpg.png";
  } else if (logo.toLowerCase().trim() === "ari") {
    src = "/assets/img/ari.png";
  } else if (logo.toLowerCase().trim() === "ari") {
    src = "/assets/img/ari.png";
  } else if (logo.toLowerCase().trim() === "vgk") {
    src = "/assets/img/vgk.png";
  }

  return (
    <img
      src={`${src}`}
      className="logo"
      alt="logo"
      data-test="component-logo"
    />
  );
};

export default Logos;
