import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links);
  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
