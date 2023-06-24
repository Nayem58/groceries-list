import React from "react";

function Footer({ listCount }) {
  return (
    <footer>
      <p>
        Total {listCount <= 1 ? "Item" : "Items"}: {listCount}
      </p>
      <div>
        <small>Copyright &copy; Nayem58</small>
      </div>
    </footer>
  );
}

export default Footer;
