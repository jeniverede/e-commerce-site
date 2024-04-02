/* Data */
import shopItems from "../data/items.json";

/* Context */
import { useShoppingCart } from "../context/ShoppingCartContext";

/* Components */
import { CartItem } from "../components/CartItem";

/* Utilites */
import { formatCurrency } from "../utilities/formatCurrency";

/* Bootstrap */
import { Offcanvas, Stack } from "react-bootstrap";
/* Offcanvas slider function from bootstrap */
/* Stack used to stack items vertically or horizontally from bootstrap */

/* Styles */
import "../styles/ShoppingCartStyle.css"
/* Notes */
/* Line 20 placement="end" puts the slider to the right, without the slider is on the left */

/* Types */
type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3 id="h3-shopping-cart">Shopping Cart</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="total">
              Total:
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = shopItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
