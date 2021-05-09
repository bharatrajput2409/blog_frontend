// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/home/Home'
import writeBlog from './components/writeblog/writeBlog'
import readBlog from './components/readblog/readBlog'
import SignUp from './components/signup/SignUp'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/writeBlog' component = {writeBlog} />
          <Route path = '/readBlog' component = {readBlog} />
          <Route path = '/SignUp' component = {SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
