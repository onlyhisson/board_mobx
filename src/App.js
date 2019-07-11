import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Header, Footer } from './components'
import { Board, About, Images, Login, NoMatch } from './pages' 

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Board}/>
          <Route path="/board" component={Board}/>
          <Route path="/about" component={About}/>
          <Route path="/about/:username" component={About}/>
          <Route path="/images" component={Images}/>
          <Route path="/login" component={Login}/>
          <Route component={NoMatch}/>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
