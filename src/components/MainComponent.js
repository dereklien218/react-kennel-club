import React, { Component } from "react";
import Header from "./HeaderComponent";
import ClassPage from "../pages/ClassPage";
import Footer from "./FooterComponent";
import ObediencePage from "../pages/ObediencePage";
import PuppyPage from "../pages/PuppyPage";
import AgilityPage from "../pages/AgilityPage";
import ScentworkPage from "../pages/ScentworkPage";
import RallyPage from "../pages/RallyPage";
import ConformationPage from "../pages/ConformationPage";
import RegisterPage from "../pages/RegisterPage";
import NewsPage from "../pages/NewsPage";
import CalendarPage from "../pages/CalendarPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DogGallery from "../pages/DogGalleryPage";
import HeroParallax from "./HeroParallaxComponent";
import ClassTabs from "./ClassTabsComponent";
import NewsParallax from "./NewsParallaxComponent";
import MapboxMap from "./MapboxMapComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { postRegistration, postFeedback } from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    agility: state.agility,
    conformation: state.conformation,
    obedience: state.obedience,
    puppy: state.puppy,
    rally: state.rally,
    scentwork: state.scentwork,
    news: state.news,
    gallery: state.gallery,
  };
};

const mapDispatchToProps = {
  postRegistration: (registration) => postRegistration(registration),
  resetRegistrationForm: () => actions.reset("registrationForm"),
  postFeedback: (feedback) => postFeedback(feedback),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <>
          <HeroParallax />
          <ClassTabs />
          <NewsParallax />
          <DogGallery gallery={this.props.gallery} />
          <MapboxMap />
        </>
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/classes" component={ClassPage} />
              <Route
                exact
                path="/puppy-classes"
                render={() => <PuppyPage courses={this.props.puppy} />}
              />
              <Route
                exact
                path="/obedience-classes"
                render={() => <ObediencePage courses={this.props.courses} />}
              />
              <Route
                exact
                path="/agility-classes"
                render={() => <AgilityPage courses={this.props.courses} />}
              />
              <Route
                exact
                path="/scentwork-classes"
                render={() => <ScentworkPage courses={this.props.courses} />}
              />
              <Route
                exact
                path="/rally-classes"
                render={() => <RallyPage courses={this.props.courses} />}
              />
              <Route
                exact
                path="/conformation"
                render={() => <ConformationPage courses={this.props.courses} />}
              />
              <Route
                exact
                path="/news-events"
                render={() => <NewsPage news={this.props.news} />}
              />
              <Route
                exact
                path="/gallery"
                render={() => <DogGallery gallery={this.props.gallery} />}
              />
              <Route
                exact
                path="/register"
                component={() => (
                  <RegisterPage
                    postRegistration={this.props.postRegistration}
                    resetRegistrationForm={this.props.resetRegistrationForm}
                  />
                )}
              />
              <Route
                exact
                path="/contactus"
                component={() => (
                  <ContactPage
                    postFeedback={this.props.postFeedback}
                    resetFeedbackForm={this.props.resetFeedbackForm}
                  />
                )}
              />
              <Route exact path="/calendar" component={CalendarPage} />
              <Route exact path="/about" component={AboutPage} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
