
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from './pages/ProductsPage';
import Homepage from "./pages/Homepage";
import HeaderNav from "./component/HeaderNav";
import FooterLow from "./component/FooterLow";
import About from "./component/About";
import Contact from "./pages/Contact";

function App() {
  return (
    
    <Router>
      <HeaderNav/>
      
      <Routes>
        
        <Route path="/home" element={ <Homepage/> } />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        

      </Routes>
      <FooterLow/>
    </Router>
    
    
  );
}

export default App;
