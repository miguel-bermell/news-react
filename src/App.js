import React, { Suspense } from 'react';
import { lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'))
const Detail = lazy(() => import('./pages/Detail'))
const NewsArchived = lazy(() => import('./pages/Archived'))

function App() {
  return (
    <div className="App">
      <main className='container'>
        <Suspense fallback={null}>
          <Router>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/news/:id' element={<Detail />} />
              <Route path='/news-archived' element={<NewsArchived />} />
            </Routes>
          </Router>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
