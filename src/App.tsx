import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';
import AboutPage from './Pages/AboutPage';
import Header from './Components/Header';
import MyArticles from './Pages/MyArticlesPage';
import CreatePage from './Pages/CreatePage';

import { GlobalContext } from './Components/context/globalContext';
import { getToken } from './services/API';

function App() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setToken(true);
    }
  }, []);

  return (
    <>
      <GlobalContext.Provider value={{ token, setToken }}>
        <Header />
        <div className='container mx-auto pl-3 pr-4 overflow-hidden	'>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/detail/:id' element={<DetailPage />}></Route>
            <Route path='/myarticles' element={<MyArticles />}></Route>
            <Route path='/createarticles' element={<CreatePage />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
      </GlobalContext.Provider>
    </>
  );
}
export default App;
