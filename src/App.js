import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Method1 } from './Method1';
import Method2 from './Method2';
import UserList from './UserList';
import NavBar from './NavBar';
import IncreDecre_ment from './IncreDecre_ment';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Method2 />} />
          <Route path='/list' element={<UserList />} />
          <Route path='/increment' element={<IncreDecre_ment />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;