import React, { Component } from "react";
import Nav from "./components/Nav";
import Active from "./components/Active";
import Completed from "./components/Completed";
import All from "./components/All";
import AddTodo from "./components/addTodo/AddTodo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import "./styles/base.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <h1 className="brand" color="primary">
            #todo
          </h1>
          <nav>
            <Nav />
          </nav>
        </Container>
        {/* Handle navigation routing */}
        <Switch>
          <Route path="/" component={All} exact />
          <Route path="/active" component={Active} exact />
          <Route path="/completed" component={Completed} exact />
          <Route path="/add" component={AddTodo} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
