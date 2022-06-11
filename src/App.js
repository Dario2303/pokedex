import React from 'react';
import {
  BrowserRouter, 
  Routes,
  Route,
} from 'react-router-dom';
import Principal from './paginas/principal';
import Pokemon from './paginas/pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Principal/>}
        />
        <Route
          path='/pokemon'
          element={<Pokemon/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
