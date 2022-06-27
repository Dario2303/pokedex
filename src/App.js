import React from 'react';
import {
  BrowserRouter, 
  Routes,
  Route,
} from 'react-router-dom';
import Principal from './paginas/principal';
import Detail from './paginas/pokemon';
import Error404 from './paginas/error/error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Principal/>}
        />
        <Route
          path='/pokemon/:id'
          element={<Detail/>}
        />
        <Route
          path='/pokemon'
          element={<Error404/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
