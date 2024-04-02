/* Data */
import shopItems from "../data/items.json";

/* Components */
import { ShopItem } from "../components/ShopItem";

/* Styles */
import "../styles/ShopStyle.css"

/* Bootstrap */
import { Col, Row } from "react-bootstrap";

export function Shop() {
  return (
    <div className="shop-container">
      <h1 id="h1">Shop</h1>
      <Row md={2} xs={1} lg={3}>
        {shopItems.map((item) => (
          <Col key={item.id}>
            <ShopItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
