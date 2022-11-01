import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div id="App">
      <Header />
      <main>
        <Switch>
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
      </main>
    </div>
  );
}

export default App;
