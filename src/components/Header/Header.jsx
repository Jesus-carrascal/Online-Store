import Logo from "../../assets/img/Logo.jpeg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ carrito }) => {
  // console.log('[bolitacontador]' , carrito)
  const totalProductosEnCarrito = carrito
    ? carrito.reduce((total, product) => total + product.quantity, 0)
    : 0;

  return (
    <div>
      <nav className="Navbar">
        <div className="content-Logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="Logo" />
          </Link>
        </div>
        <div className="content-svg-carrito">
          <Link to="/cart" className="carrito-enlace">
            <i className="bi bi-cart3"></i>
            <span className="cart-counter">{totalProductosEnCarrito}</span>
          </Link>
        </div>
        <div className="content-button-login">
          <button className="login-button">Iniciar sesión</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
