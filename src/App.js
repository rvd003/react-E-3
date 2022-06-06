import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import {Routes,Route} from "react-router-dom"
import Products from "./components/Products/Products";



function App() {
  return (
    <div className="App">
     <Products></Products>
      
    </div>
  );
}

export default App;
