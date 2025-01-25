import { useState, useEffect } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuList.module.css";
import menuData from "../../../store/data.json";

function MenuList() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menuData.menu);
  }, []);

  return (
    <ul className={styles.menuList}>
      {menu.length > 0 ? (
        menu.map((menuItem, index) => <MenuItem key={index} menu={menuItem} />)
      ) : (
        <p>No menu items available</p>
      )}
    </ul>
  );
}

export default MenuList;
