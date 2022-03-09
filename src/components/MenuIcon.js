import React, { useState } from "react";
import { MenuModal } from "./MenuModal";
import "./menuIconStyle.css";

export const MenuIcon = () => {
  const [menuIsOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div
        className="menu-icon-container"
        onClick={() => {
          console.log({ menuIsOpen });
          setMenuOpen(true);
        }}
      >
        <button></button>
      </div>
      {menuIsOpen && <MenuModal setMenuOpen={setMenuOpen} />}
    </div>
  );
};
