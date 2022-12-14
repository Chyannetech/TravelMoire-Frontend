import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/app.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Show from "./pages/Show";


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
        <Routes>
          <Route path="/show" exact element={<Show />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
