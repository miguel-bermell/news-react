import React from 'react';
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

function App() {
  return (
    <div className="App">
      <main className='container'>
        <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news/:id' element={<Detail />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
