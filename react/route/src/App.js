import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />

          </Route>
          <Route path='/about' component={About} />

            <Route path='query' component={Query} />
          </Route>
          <Route path='/about(/:name)' component={About} />
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>

          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Query = (props) => (
  <h2>{props.location.query.msg}</h2>
)

const Title = () => (
  <h1>Hello from Title Component</h1>
)

const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)

const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)

const Nav = () => (
  <div>
<<<<<<< HEAD
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>
=======
    <IndexLink activeClassName='active' to='/'><button class="btn btn-success">Home</button></IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to={{ pathname: '/address/query', query: { msg: 'Hello from Route Query' } }}>Route Query</IndexLink>
>>>>>>> origin/master
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Home = () => <h1>Hello from Home!</h1>

<<<<<<< HEAD
const Address = (props) => <div>
  <br />
  <IndexLink activeClassName='active' to='/address'>Twitter Feed</IndexLink>&nbsp;
  <IndexLink activeClassName='active' to='/address/instagram'>Instagram Feed</IndexLink>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>
=======
class Address extends Component {
  navigate() {
    this.props.history.pushState(null,"/");
  //  this.context.router.push(null,"/");
  }

  render(){
    return (
      <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'><button class="btn btn-success">Instagram Feed</button></Link>
  <h1>We are located at 555 Jackson St.</h1>
  {this.props.children}
  <button onClick={this.navigate.bind(this)}>Home</button>
</div>
      );
  }
}

// const Address = (props) => 
// <div>
//   <br />
//   <Link to='/address'>Twitter Feed</Link>&nbsp;
//   <Link to='/address/instagram'><button class="btn btn-success">Instagram Feed</button></Link>
//   <h1>We are located at 555 Jackson St.</h1>
//   {props.children}
//   <button onClick={this.navigate.bind(this)}>Home</button>
// </div>
>>>>>>> origin/master

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

<<<<<<< HEAD
const About = () => <h3>Welcome to the About Page</h3>
=======
const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
    { props.params.name && <h2>Hello, {props.params.name}</h2>}
  </div>
)
>>>>>>> origin/master

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App