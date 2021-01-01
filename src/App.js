import React, {Component} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Services from "./Services";
import Contact from "./Contact";
import Navbar from './Navbar';
import Footer from "./Footer";
import { Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </>
    );
  }
}
export default App;

