import React from "react";

const imageStyle = ({ url, width, height }) => ({
  background: `url(${url})`,
  width: `${width}`,
  height: `${height}`
});

export const Image = ({ ...styles }) => (
  <div
    className={`image-component ${styles.classNames}`}
    style={imageStyle({ ...styles })}
  ></div>
);
