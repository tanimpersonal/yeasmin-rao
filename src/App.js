import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import "./App.css";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/checkout"></Route>
      </Routes>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
