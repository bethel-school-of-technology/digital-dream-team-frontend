import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Header /> } >
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
