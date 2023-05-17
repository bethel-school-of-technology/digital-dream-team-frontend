import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import Builder from './components/Builder';
import SignIn from './components/SignIn';
import { UserProvider } from './components/contexts/UserProvider';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={ <Header /> } >
                <Route index element={<Home />} />
                <Route path="builder" element={<Builder />} /> 
                <Route path="sign-in" element={<SignIn />} />
              </Route>
              <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
