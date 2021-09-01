import "./Bar.scss"
import Profile from "./Profile";
import img from "./pic.jpg";

function Bar(props) {
       return (
        <div className="col-3 right">
        <div className="d-lg-inline-flex">
        <span><strong>Suggestions For You</strong></span>
        <span><a href="https://github.com/" class="right-a">See All</a></span>
        </div>
        <Profile name="Akshat Nema"  />
        <Profile name="Abhinandan Gaur"  />
        <Profile name="Aparna Bhatt" />
        <Profile name="Bhawna Khatri" />
        <Profile name="Dev Sharma" />
        <hr />
        <div className="account">
           <h4>Account</h4>
           <hr />
          <div className="d-lg-inline-flex acc-details">
          <img src={img} alt="profile" height="30px" width="30px" className="img"></img>
          <div className="acc-name">{props.user}</div>
          <p><i class="arrow down"></i></p>
          </div> 
        </div>
        </div>
       )
}

export default Bar;