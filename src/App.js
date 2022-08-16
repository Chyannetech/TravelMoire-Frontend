import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
   
   
    </div>
  );
}


export default App;