import Logo from "../../assets/img/Logo.jpeg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import discord from "../../assets/svg/discord.svg";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="content-info">
        <div className="content-logo-info">
          <img src={Logo} alt="Logo" className="logo-footer" />
          <p className="text-footer">
            ¡Bienvenidos a Onli-Store! Nos enorgullece ofrecerte
            una amplia selección de accesorios, ropa y productos tecnológicos,
            todo desde la comodidad de tu hogar. Buscamos brindarte la mejor experiencia de compra, con productos de
            alta calidad y a precios competitivos.
          </p>
          <div className="content-phone">
            <p className="text-phone">Llama las 24/7</p>
            <i className="bi bi-telephone"></i>
            <div className="content-phone-svg">
              <h2>+57 3122396588</h2>
            </div>
          </div>
        </div>
        <div className="content-links">
          <a
            href="https://api.whatsapp.com/send?phone=573122396588"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" />
            WhatsApp
          </a>
          <a href="/">
            <img src={facebook} alt="Facebook" />
            Facebook
          </a>
          <a href="/">
            <img src={instagram} alt="Instagram" />
            Instagram
          </a>
          <a href="/">
            <img src={discord} alt="Discord" />
            Discord
          </a>
        </div>
        <div className="contents-footers">
          <h2>My Account</h2>
          <ul className="list-footers">
            <a href="/">
              <li>Sing In</li>
            </a>
            <a href="/">
              <li>View Cart</li>
            </a>
            <a href="/">
              <li>My Wishilist</li>
            </a>
            <a href="/">
              <li>Help</li>
            </a>
          </ul>
        </div>
        <div className="contents-footers">
          <h2>Customers Services</h2>
          <ul className="list-footers">
            <a href="/">
              <li>Payment Methods</li>
            </a>
            <a href="/">
              <li>Returns</li>
            </a>
            <a href="/">
              <li>Terms and Conditions</li>
            </a>
            <a href="/">
              <li>Privacy Policy</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="content-copyright">
        <p>Copyright &copy; 2023 Onli-Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
