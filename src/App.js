import React from 'react'
import Globalstyle from './components/Globalstyle'
import AboutPage from './pages/Aboutus'
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <AboutPage />
    </div>
  );
}

export default App;
