import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import { Home } from './components/Home'
import AllProducts from './components/AllProducts/AllProducts';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/allProducts" element={<AllProducts />}  />
        <Route path="/" element={<Home />}  />
      </Routes>

    </>
  );
}

export default App;
