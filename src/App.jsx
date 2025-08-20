
  
import "bootstrap/dist/css/bootstrap.min.css";

 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import ProductsPage from './pages/ProductsPage';
 
import Homepage from "./pages/Homepage";
import HeaderNav from "./component/HeaderNav";

function App() {
  return (
    
    <Router>
      <HeaderNav/>
      <Routes>
        
        <Route path="/" element={ <Homepage/> } />

        <Route path="/products" element={<ProductsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
