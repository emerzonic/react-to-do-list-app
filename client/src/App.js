import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Middleware from "./Components/Middleware";
import User from "./Components/User/Users";
import Header from "../src/Components/Sections/Header";



const App = () => (
  <Router>
  <div className="ui grid">
  <div className="sixteen wide mobile ten wide tablet eight wide computer centered column commentDiv">
          <Header/>
          <Route exact path="/" component={Middleware} />
          <Route exact path="/todos" component={Middleware}/>
          <Route exact path="/login" component={User}/>
          <Route exact path="/signup" component={User}/>
          <Route exact path="/signout" component={User}/>
    </div>
    </div>
  </Router>
);

export default App;
