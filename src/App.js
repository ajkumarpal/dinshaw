import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Home from "./Home";
import Contact from './contact';

function App() {
  return (
   <>
      <Router>
        <Header />
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route  path="/contact" exact component={Contact} />
        </Switch>
          <Footer />
      </Router>
   </>

  );
}

export default App;
 