import React from 'react'
import Globalstyle from './components/Globalstyle'
import AboutPage from './pages/Aboutus'
import Nav from './components/Nav'
import Contactus from './pages/Contactus'
import Ourwork from './pages/Ourwork'
import Moviedetail from './pages/Moviedetail'
import {Route , Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <Switch>
        <Route path = '/' exact>
           <AboutPage />
        </Route>
        <Route path = '/work' exact>
            <Ourwork />
        </Route>
        <Route path = '/work/:id'>
            <Moviedetail />
        </Route>
        <Route path = '/contact'>
            <Contactus />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
