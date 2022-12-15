import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

import NotFound from './pages/NotFound';

function App() {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={
        <Main
          user={user}
          setUser={setUser} 
        /> } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
