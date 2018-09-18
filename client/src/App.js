import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Middleware from "./Components/Middleware";
import User from "./Components/User/Users";
import Todo from "./Components/Todo/Todo";
import Header from "../src/Components/Sections/Header";


const App = () => (
  <Router>
      <div className='ui raised very padded text container segment'>
          <Header/>
          <Route exact path="/" component={Middleware} />
          <Route exact path="/todos" component={Todo}/>
          <Route exact path="/login" component={User}/>
          <Route exact path="/signup" component={User}/>
          <Route exact path="/signout" component={User}/>
    </div>
  </Router>
);

export default App;
