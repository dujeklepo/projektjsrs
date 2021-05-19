import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';
import Početna from './Početna.js';
import Povijest from './Components/Povijest';
import Revolver from './Components/Revolver';
import Puska from './Components/Puska';
import Bande from './Components/Bande';
import Create from './Components/Create';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Router>
      <Route exact path="/" component={Početna}></Route>
      <Route path="/Povijest" component={Povijest}></Route>
      <Route path="/Revolver" component={Revolver}></Route>
      <Route path="/Puska" component={Puska}></Route>
      <Route path="/Bande" component={Bande}></Route>
      <Route path="/Create" component={Create}></Route>

      <Footer></Footer> 
    </Router>

    
      
    </div>
  );
}

export default App;
