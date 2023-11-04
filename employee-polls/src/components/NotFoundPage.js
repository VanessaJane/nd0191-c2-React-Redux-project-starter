import { connect } from "react-redux";

const NotFoundPage = () => {
  return (
    <div className="border-box">
      <h2 className="center">Page Not Found!</h2>
    </div>
  );
};

export default connect()(NotFoundPage);
