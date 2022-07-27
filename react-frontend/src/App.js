import Header from './Components/Header'
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Sceduled from './Sceduled';
import Past from './Past';
import EventDetails from './EventDetails';
import Form from './Form';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
      <Home />
      </Route>
      <Route exact path='/sceduled'>
      <Sceduled />
      </Route>
      <Route exact path='/past'>
      <Past />
      </Route>
      <Route exact path='/events/:id'>
      <EventDetails />
      </Route>
      <Route exact path='/form'>
      <Form />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
