import Home from "./Containers/Home/Home";
import Products from "./Containers/Product/Products";
import NavigationBar from "./Containers/Home/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Containers/Cart/Cart"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
