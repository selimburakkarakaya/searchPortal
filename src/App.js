import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './assets/css/main.css'
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage'
import RecordPage from './pages/RecordPage/RecordPage'
import data from './data/mock-data-old.json'
import { useEffect } from 'react';
import { getData } from './app/utils';

function App() {

  useEffect(() => {
    const datas = getData();
    if (!datas) {
      sessionStorage.setItem("data", JSON.stringify(data.data))  
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={MainPage} />
          <Route exact path="/listPage/:paramValue" Component={ListPage} />
          <Route exact path="/recordPage" Component={RecordPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
