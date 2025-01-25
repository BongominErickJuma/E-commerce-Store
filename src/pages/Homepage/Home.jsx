import "./Home.css";
import bg from "../../Assets/basket.png";
import Menu from "../Menu/Menu/Menu";
import MenuList from "../Menu/MenuList/MenuList";

const Home = () => {
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 information ">
              <p className="welcome">
                Welcome to <span>Restaurant.</span>
              </p>
              <p>
                where we serve delicious, freshly prepared meals made with the
                finest ingredients. Enjoy a cozy dining experience with flavors
                you'll love!
              </p>
            </div>
            <div className="col-lg-5 animated mx-auto ">
              <img src={bg} alt="food" />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <h2>Our Menu</h2>
      <Menu>
        <MenuList />
      </Menu>
    </>
  );
};

export default Home;
