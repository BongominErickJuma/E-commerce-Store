import useCart from "../../../hooks/useCart";
import AddToCartBtn from "../../../components/AddToCartBtn/AddToCartBtn";
import IncrementDecrementBtn from "../../../components/IncrementDecrementBtn/IncrementDecrementBtn";
import "./MenuItem.css";
import { Link } from "react-router-dom";

function MenuItem({ menu }) {
  const { cart } = useCart();

  const targetCartItemIndex = cart.findIndex(
    (cartItem) => cartItem.name === menu.name
  );
  const targetCartItem = cart[targetCartItemIndex];
  const count = targetCartItem?.count || 0;

  return (
    <li className="menu">
      {/* <picture>
        <source media="(min-width: 1024px)" srcSet={menu.image.desktop} />
        <source media="(min-width: 768px)" srcSet={menu.image.tablet} />
        <source media="(max-width: 767px)" srcSet={menu.image.mobile} />
        <img
          className="menu__image"
         
          src={`${import.meta.env.BASE_URL}${menu.image.thumbnail}`}
          alt={menu.name}
        />
      </picture> */}
      <img
        className="menu__image"
        // src={menu.image.thumbnail}
        src={`${import.meta.env.BASE_URL}${menu.image.thumbnail}`}
        alt={menu.name}
      />

      {count < 1 ? (
        <AddToCartBtn menu={menu} />
      ) : (
        <IncrementDecrementBtn item={menu} count={count} />
      )}
      <article className="menu__text border-bottom">
        <p className={`menu__name para-1 text-center`}>{menu.name}</p>
        <div className="row text-center">
          <div className="col-4">
            <p className={`menu__price para-1`}>Price ${menu.price}</p>
          </div>
          <div className="col-8">
            <Link
              to="/restaurant/detail"
              state={menu}
              className="w-100 para-1 text-decoration-none text-danger"
            >
              View Details
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
}

export default MenuItem;
