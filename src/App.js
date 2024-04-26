import logo from './logo.svg';
import './App.css';
import UserTable from './components/UserList';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<UserTable/>} />
  </Routes>
  </BrowserRouter>
    
    </div>
  );
}

export default App;
