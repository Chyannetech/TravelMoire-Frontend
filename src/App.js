import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Create from "./pages/Create";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/home" exact element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/create" exact element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
