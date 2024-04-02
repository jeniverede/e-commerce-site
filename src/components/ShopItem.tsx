/* Context */
import { useShoppingCart } from "../context/ShoppingCartContext";

/* Utilities */
import { formatCurrency } from "../utilities/formatCurrency";

/* Styles */
import "../styles/ShopItemStyle.css"

/* Bootstrap */
import { Button, Card } from "react-bootstrap";

/* Types */
type ShopItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  dimensions: string;
  description: string;
};

export function ShopItem({
  id,
  name,
  price,
  imgUrl,
  dimensions,
  description,
}: ShopItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="card">

      <Card.Img
      className="card-img"
        variant="top"
        src={imgUrl}
      />

      <Card.Body className="card-body">

        <Card.Title>
          <div className="card-name">
            <span>
              {name}
            </span>

            <span>
              {formatCurrency(price)}
            </span>
          </div>

          <div className="card-text">
            {dimensions}
          </div>

          <div className="card-text">
            {description}
          </div>
        </Card.Title>

        <div className="btn-container">
          {quantity === 0 ? (
            <Button id="btn-primary" onClick={() => increaseCartQuantity(id)}>
              + add to cart
            </Button>
          ) : (
            <div
              className="cart-btn-container">
              <div className="btn-items"
                >
                <Button id="btn-add-subtract" onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span>{quantity}</span> 
                </div>
                <Button id="btn-add-subtract"onClick={() => increaseCartQuantity(id)}>+</Button>
                <div>
                  <Button id="btn-remove"
                    onClick={() => removeFromCart(id)}
                    variant="danger"
                  >
                    remove
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
