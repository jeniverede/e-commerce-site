/* React */
import { NavLink } from "react-router-dom";

/* Context */
import { useShoppingCart } from "../context/ShoppingCartContext";

/* Styles */
import "../styles/NavbarStyle.css";

/* Bootstrap */
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS sticky="top" className="navbar-bs">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            home
          </Nav.Link>
          <Nav.Link to="/shop" as={NavLink}>
            shop
          </Nav.Link>
          <Nav.Link to="/studio" as={NavLink}>
            studio
          </Nav.Link>
        </Nav>

          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              variant="outline-dark"
              className="btn-cart"
            >
              <i className="fa-solid fa-cart-shopping"></i>

              <div id="cart-count-circle">{cartQuantity}</div>
            </Button>
          )}

      </Container>
    </NavbarBS>
  );
}
