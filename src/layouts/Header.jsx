import React from "react";

function Header({ headerTxt }) {
  return <header>{headerTxt}</header>;
}

Header.defaultProps = {
  headerTxt: "List",
};

export default Header;