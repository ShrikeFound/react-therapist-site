import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from './components/Welcome.js'
import IndividualCounseling from './components/IndividualCounseling.js'
import GroupTherapy from './components/GroupTherapy.js'
import Contact from './components/Contact.js'
import Header from './components/Header.js'

import welcomeImage from './images/group.jpg'
import individualImage from './images/smiling.jpg'
import groupImage from './images/group.jpg'
import contactImage from './images/laptop.jpg'
import Footer from './components/Footer.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/">
          <Welcome img={welcomeImage}/>
        </Route>
        <Route path="/individual-counseling">
          <IndividualCounseling img={individualImage}/>
        </Route>
        <Route path="/group-therapy">
          <GroupTherapy img={groupImage}/>
        </Route>
        <Route path="/contact">
          <Contact img={contactImage}/>
        </Route>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
