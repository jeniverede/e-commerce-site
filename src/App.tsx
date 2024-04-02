/* React */
import { Routes, Route } from "react-router-dom";

/* Pages */
import { Studio } from "./pages/Studio";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";

/* Context */
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

/* Components */
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";

/* Styles */
import "./App.css";

/* Bootstrap */
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/studio" element={<Studio />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
      <Contact />
    </>
  );
}

export default App;
