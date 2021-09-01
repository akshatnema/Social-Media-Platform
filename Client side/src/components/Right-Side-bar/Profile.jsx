import "./profile.scss";
import img from "./pic.jpg";

function Profile(props) {
  return (
    <div class="d-flex justify-content-between right-para">
     <img src={img} alt="profile" height="30px" width="30px" className="img"></img>
      <div class="text">{props.name} </div>
      <button type="button" class="btn btn-light btn-right">
        Follow
      </button>
    </div>
  );
}

export default Profile;
