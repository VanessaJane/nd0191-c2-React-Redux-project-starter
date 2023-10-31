import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
