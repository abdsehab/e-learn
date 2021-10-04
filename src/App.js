import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Components/About US/Aboutus';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import Courses from './Components/Courses/Courses';
import Contact from './Components/Contact Us/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Navbar></Navbar>
        <Switch>
          
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <Aboutus></Aboutus>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>

        <Footer></Footer>
        
      </Router>
      
      
    </div>
  );
}

export default App;
