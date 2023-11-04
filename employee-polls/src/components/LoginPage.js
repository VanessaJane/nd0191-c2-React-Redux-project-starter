import { useState } from "react";
import { connect } from "react-redux";
import { handleLogIn } from "../actions/shared";
import app_logo from "../resources/app_logo.jpg";

const LoginPage = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.name === "username") {
      setUserName(target.value);
    } else {
      setPassword(target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredUsers = props.usersList.filter(
      (user) => user.id === username && user.password === password
    );
    if (filteredUsers.length === 0) {
      alert("Incorrect username or password!");
    } else if (filteredUsers.length > 1) {
      alert("This user is not valid!");
    } else {
      props.dispatch(handleLogIn(filteredUsers[0].id));
    }
  };

  return (
    <div className="center_container">
      <img src={app_logo} alt="App logo" className="logo" />
      <h2 className="center">Log In</h2>
      <form onSubmit={handleSubmit} className="login_form">
        <label>
          User
          <input
            name="username"
            type="text"
            value={username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            autoComplete="on"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <button
          type="submit"
          disabled={username === "" || password === ""}
          className="submit_btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  usersList: Object.keys(users).map((id) => users[id]),
});

export default connect(mapStateToProps)(LoginPage);
