import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu/Menu/Menu";
import MenuList from "./pages/Menu/MenuList/MenuList";
import Cart from "./pages/Cart/Cart/Cart";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import useCart from "./hooks/useCart";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Homepage/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const { showModal } = useCart();
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div className="main">
            <Routes>
              <Route exact path="/E-commerce-Store" element={<Home />} />
              <Route
                exact
                path="/E-commerce-Store/menu"
                element={
                  <Menu>
                    <MenuList />
                  </Menu>
                }
              />
              <Route exact path="/E-commerce-Store/cart" element={<Cart />} />
              <Route exact path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </div>
          <Footer />
        </div>

        {showModal && <ConfirmationModal />}
      </Router>
    </>
  );
}

export default App;
