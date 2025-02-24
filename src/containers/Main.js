import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/Education";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects.js";
import MySkills from "../pages/myskills/MySkills.js";
import Contact from "../pages/contact/Contact.js";
import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="/myskills"
            render={(props) => <MySkills {...props} theme={this.props.theme} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Contact {...props} theme={this.props.theme} />}
            />
          )}

          
          <Route
            path="*"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
        </Switch>
      </HashRouter>
    );
  }
}
