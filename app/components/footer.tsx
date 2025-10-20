import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
        <footer className="w-full m-2 text-center text-md">
        © {year} YourCompany. All rights reserved.
        </footer>
    </div>
  );
};

export default Footer;