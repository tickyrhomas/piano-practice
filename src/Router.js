import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './Main'
import Piano from './Piano'
import Written from './Written'

const BasicExample = () => (
  <Router>
    <div>
      <Main/>
      <Route exact path="/" component={Home} />
      <Route path="/piano" component={Piano} />
      <Route path="/written" component={Written} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default BasicExample;