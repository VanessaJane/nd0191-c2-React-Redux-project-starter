import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { connect } from "react-redux";

const Leaderboard = (props) => {
  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">User</th>
          <th scope="col">Answered</th>
          <th scope="col">Created</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.usersList.map((user, idx) => (
          <tr key={user.id}>
            <td>{idx + 1}</td>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={user.avatar}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{user.name}</p>
                  <p className="text-muted mb-0">{user.id}</p>
                </div>
              </div>
            </td>
            <td>{user.answered}</td>
            <td>{user.created}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

const mapStateToProps = ({ users }) => ({
  usersList: Object.keys(users)
    .sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    )
    .map((id) => {
      return {
        id: users[id].id,
        name: users[id].name,
        avatar:
          users[id].avatarURL === undefined
            ? "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-avatar-vector-isolated-on-white-background-png-image_1694546.jpg"
            : users[id].avatarURL,
        answered: "" + Object.keys(users[id].answers).length,
        created: "" + users[id].questions.length,
      };
    }),
});

export default connect(mapStateToProps)(Leaderboard);
