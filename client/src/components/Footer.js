import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>All Rights Are Reserved &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
