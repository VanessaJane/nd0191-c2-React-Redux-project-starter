import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavigationBar from "./NavigationBar";
import { LoadingBar } from "react-redux-loading-bar";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  console.log(props);
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {props.isLoggedIn === false ? null : <NavigationBar />}
        <Routes>
          <Route
            path="/"
            exact
            element={props.isLoggedIn === false ? <LoginPage /> : null}
          />
          {/* <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/new" element={<NewTweet />} /> */}
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  isLoggedIn: authedUser != null,
});

export default connect(mapStateToProps)(App);
