import "./Home.css";
import bg from "../../Assets/herobg.jpg";
import phone from "../../Assets/icon-phone.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 information ">
              <h2>
                Welcome to <span>Restaurant.</span>
              </h2>
              <p>Delivering great food for more than 18 years!</p>
              <div className="d-flex mt-4">
                <Link to="/E-commerce-Store/menu" className="cta-btn">
                  Add Items
                </Link>
              </div>
              <div className="social-links my-5">
                <a href="#" className="phone">
                  <img src={phone} alt="phone" />
                  077508904 | 0786146150
                </a>
                <a href="#" className="whatsaap">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 animated mx-auto ">
              <img src={bg} alt="food" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
