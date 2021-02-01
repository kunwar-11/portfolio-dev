import React from 'react'
import Globalstyle from './components/Globalstyle'
import AboutPage from './pages/Aboutus'
import Nav from './components/Nav'
import Contactus from './pages/Contactus'
import Ourwork from './pages/Ourwork'
import Moviedetail from './pages/Moviedetail'
import {Route , Switch , useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location = {location} key = {location.key}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
