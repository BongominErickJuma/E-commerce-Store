import { useState, useEffect, useCallback } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuList.module.css";

function MenuList() {
  const [menu, setMenu] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("./data/data.json");
      if (!response.ok) {
        throw new Error(`Error fetching menu: ${response.status}`);
      }
      const result = await response.json();
      setMenu(result.menu);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
