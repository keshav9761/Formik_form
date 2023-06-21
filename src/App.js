import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Method1 } from './Method1';
import Method2 from './Method2';
import UserList from './UserList';
import NavBar from './NavBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Method2 />} />
          <Route path='/list' element={<UserList />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;