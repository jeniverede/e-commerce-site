/* Data */
import shopItems from "../data/items.json";

/* Components */
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

/* Styles */
import "../styles/CartItemStyle.css";

/* Bootstrap */
import { Button, Stack } from "react-bootstrap";

/* Notes */
/* &times gives us a button with X for removing an item*/

/* Types */
type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = shopItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="stack-container">
      <img className="cart-img"
        src={item.imgUrl}
      />
      <div className="me-auto">
        <div>
          {item.name} {""}
          {quantity > 1 && (
            <span className="text-muted" >
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
