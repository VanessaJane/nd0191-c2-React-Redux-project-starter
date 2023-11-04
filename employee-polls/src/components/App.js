import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavigationBar from "./NavigationBar";
import { LoadingBar } from "react-redux-loading-bar";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import Dashboard from "./Dashboard";
import QuestionDetail from "./QuestionDetail";
import NotFoundPage from "./NotFoundPage";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {props.isLoggedIn === false ? null : <NavigationBar />}
        {props.isLoggedIn === false ? (
          <LoginPage />
        ) : (
          <Routes>
            <Route path="*" exact element={<NotFoundPage />} />
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add" element={<NewQuestion />} />
            <Route
              path="/questions/:question_id"
              element={<QuestionDetail />}
            />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  isLoggedIn: authedUser != null,
});

export default connect(mapStateToProps)(App);
