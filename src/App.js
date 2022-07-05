import Header from "./Components/Header";
import Home from "./Components/Home";
// import FrontEggLogin from "./FrontEggLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Shared/Login";
import Signup from "./Components/Shared/Signup";
function App() {
  return (
    <>
      {/* <FrontEggLogin/> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
