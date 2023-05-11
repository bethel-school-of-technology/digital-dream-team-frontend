import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import Builder from './components/Builder';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Header /> } >
              <Route index element={<Home />} />
              <Route path="builder" element={<Builder />} /> 
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
