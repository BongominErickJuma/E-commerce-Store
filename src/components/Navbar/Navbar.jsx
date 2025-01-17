import { useEffect, useRef, useState } from "react";
import useCart from "../../hooks/useCart";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useCart();
  const cartRef = useRef(null);
  const prevCartLength = useRef(cart.length);
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const handleToggleSideBar = () => {
    setIsSidebarToggled(!isSidebarToggled);
  };

  useEffect(() => {
    if (cart.length > prevCartLength.current) {
      cartRef.current.classList.add("cartShake");
      setTimeout(() => {
        cartRef.current.classList.remove("cartShake");
      }, 400);
    }
    prevCartLength.current = cart.length;
  }, [cart.length]);

  return (
    <header className="header">
      <div className="logo_container">
        <div className="image_container">
          <img
            src={`${
              import.meta.env.BASE_URL
            }/images/illustration-empty-cart.svg`}
            alt="Restaurant logo"
            className="logo"
          />
        </div>
        <NavLink to="/E-commerce-Store" className="heading-2">
          Restaurant
        </NavLink>
      </div>

      <nav className="navbar">
        <div className="cart me-5" ref={cartRef}>
          <Link to="/E-commerce-Store/cart">
            <img
              src={`${import.meta.env.BASE_URL}/images/icon-add-to-cart.svg`}
              alt="icon add to cart"
            />
            <span className="cartCount">{cart.length}</span>
          </Link>
        </div>
        <ul className={`nav_list ${isSidebarToggled ? "toggled" : ""}`}>
          <li onClick={() => handleToggleSideBar()}>
            <Link to="/E-commerce-Store/menu" className="para-1">
              Add Items
            </Link>
          </li>
        </ul>

        <i
          className={`mobile-nav-toggle bi ${
            isSidebarToggled ? "bi-x" : "bi-list"
          }`}
          onClick={() => handleToggleSideBar()}
        ></i>
      </nav>
    </header>
  );
};

export default Navbar;
