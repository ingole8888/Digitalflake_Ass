import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Onboarding from './Pages/Onboarding';
import Home from './Pages/Home';
import RequiredAuth from './hoc/RequiredAuth'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          )}
        />
        <Route path="/login" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
