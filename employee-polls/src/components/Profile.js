import { connect } from "react-redux";

const Profile = (props) => {
  const avatar =
    props.avatar === undefined
      ? "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-avatar-vector-isolated-on-white-background-png-image_1694546.jpg"
      : props.avatar;
  return (
    <div className="profile">
      <img
        src={avatar}
        alt={`Avatar of ${props.name}`}
        style={{ width: "34px", height: "34px" }}
        className="rounded-circle"
      />
      <label>{props.name}</label>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser];
  return {
    avatar: user.avatarURL,
    name: user.name,
  };
};

export default connect(mapStateToProps)(Profile);
