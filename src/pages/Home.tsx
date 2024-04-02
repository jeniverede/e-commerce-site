/* Styles */
import "../styles/HomeStyle.css";

export function Home() {
  return (
    <>
      <div>
        <h1 id="h1-home">bright stone ceramics</h1>
        <h3 id="h3-home">ceramics made by hand in Whitby, England</h3>
      </div>
      <div className="main-img-container">
        <img src="../img/home-page-img.jpg" alt="main image" />
      </div>
      <p id="product-credit">
        all product photos from Unsplash/Tom Crew & Turning Earth Ceramics
      </p>
      <div>
        <h2 id="h2-home">new products</h2>

        <div className="new-products-container">

          <div className="new-product">
            <a href="/shop">
              <img  
                src="./img/abbey-vessel.jpg" 
                alt="image of abbey-vessel" 
              />
            </a>
            <h2 id="h2-home">abbey vessel</h2>
          </div>

          <div className="new-product">
            <a href="/shop">
              <img
                src="./img/church-platform-bowl.jpg"
                alt="image of abbey-vessel"
              />
            </a>
            <h2 id="h2-home">church platform bowl</h2>
          </div>
          
        </div>
      </div>
    </>
  );
}
