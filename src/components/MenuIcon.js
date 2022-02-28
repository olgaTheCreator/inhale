import React, { useState } from "react";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { MenuModal } from "./MenuModal";

export const MenuIcon = () => {
  const [menuIsOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          console.log({ menuIsOpen });
          setMenuOpen(true);
        }}
      >
        <DehazeRoundedIcon fontSize="large" />
      </div>
      {menuIsOpen && <MenuModal setMenuOpen={setMenuOpen} />}
    </div>
  );
};
