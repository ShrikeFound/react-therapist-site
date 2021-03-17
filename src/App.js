import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from './components/Welcome.js'
import IndividualCounseling from './components/IndividualCounseling.js'
import GroupTherapy from './components/GroupTherapy.js'
import Contact from './components/Contact.js'
import Header from './components/Header.js'
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Welcome} />
        <Route path="/individual-counseling" component={IndividualCounseling} />
        <Route path="/group-therapy" component={GroupTherapy} />
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
