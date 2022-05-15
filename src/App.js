import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import React from "react";
import AddReview from './components/add-review';
import MoviesList from './components/movies-list';
import Movie from './components/movie';
import Login from './components/login';
function App() {
  const [user, setUser] = React.useState(null);
  async function login(user = null) {
    // default user to null
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/movies"}>Movie</Link>
            </Nav.Link>
            <Nav.Link>
              {user ? <a>Logout User</a> : <Link to={"/login"}>Login</Link>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path={["/", "/movies"]}
        component={MoviesList}>
        </Route>
        <Route path="/movies/:id/review" render={(props) =>
            <AddReview {...props} user={user} />
        }>
        </Route>
        <Route path="/movies/:id/" render={(props) =>
            <Movie {...props} user={user} />
        }>
        </Route>
        <Route path="/login" render={(props) =>
            <Login {...props} login={login} />
        }>
        </Route>
      </Switch>
    </div>
  );
}

export default App;