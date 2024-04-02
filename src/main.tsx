/* React */
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* Components */
import App from "./App.tsx";

/* Styles */
import './main.css';

/* Bootstrap - mobile first*/
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
 