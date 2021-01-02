import React from 'react';

// Components
import AsideLeft from './components/AsideLeft';
import AsideRight from './components/AsideRight';
import Header from './components/Header';

// Pages
import Highlights from './pages/Highlights';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main_wrap">

        <AsideLeft />        
        
        <div className="main">

          <Highlights />

        </div>
        
        <AsideRight />

      </div>
    </div>
  );
}

export default App;
