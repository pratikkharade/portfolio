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
    const pageProps = {
      theme: this.props.theme,
      isDark: this.props.isDark,
      toggleTheme: this.props.toggleTheme,
    };
    return (
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} {...pageProps} />
              ) : (
                <Home {...props} {...pageProps} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} {...pageProps} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => <Experience {...props} {...pageProps} />}
          />
          <Route
            path="/education"
            render={(props) => <Education {...props} {...pageProps} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} {...pageProps} />}
          />
          <Route
            path="/myskills"
            render={(props) => <MySkills {...props} {...pageProps} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} {...pageProps} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Contact {...props} {...pageProps} />}
            />
          )}

          <Route
            path="*"
            render={(props) => <Home {...props} {...pageProps} />}
          />
        </Switch>
      </HashRouter>
    );
  }
}
