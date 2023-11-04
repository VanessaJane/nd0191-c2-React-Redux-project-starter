import { Link } from "react-router-dom";
import { handleLogOut } from "../actions/shared";
import { connect } from "react-redux";
import Profile from "./Profile";

const NavigationBar = (props) => {
  const logoutTapped = (event) => {
    event.preventDefault();
    props.dispatch(handleLogOut());
  };
  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/add">New</Link>
      {props.user === undefined ? (
        <div className="info-container">
          <button onClick={logoutTapped}>Login</button>
        </div>
      ) : (
        <div className="info-container">
          <Profile />
          <button onClick={logoutTapped}>Logout</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser],
});

export default connect(mapStateToProps)(NavigationBar);
