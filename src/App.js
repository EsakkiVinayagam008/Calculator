import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Mainpage from './Componend/Mainpage';

import Calculator from './Componend/Calculator';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         
          <Route path='/' element={<Mainpage />} />
         
          <Route path='/Calculator' element={<Calculator/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
