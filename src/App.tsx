import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  let location = useLocation();
  return (
    <div id="App">
      <Header />
      <TransitionGroup component={"main"}>
        <CSSTransition timeout={500} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Redirect to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
