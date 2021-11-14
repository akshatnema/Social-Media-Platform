import React from 'react';
// import {Row,Column} from "react-bootstrap";
import "./profile-main.scss";

const right = () => {
    return (
       <>

       <div className="profile-user">

        <div className="profile-bottom">
        <i class="fas fa-user-circle fa-3x"></i>
          </div>  

       <div className="profile-bottom">
       <h1>USER</h1>
       </div>

       <div className="user-details profile-bottom">

       <div>
        <p>Post</p>
        <p>9</p>
       </div>

        <div >
        <p>Followers</p>
        <p>9</p>
        </div>
         
        <div>
        <p>Following</p>
        <p>9</p>
        </div>
    
        </div>
        
        <div className="edit-user">
            <div>
                <h1 style={{}}>First Name</h1>
                <button>edit</button>
            </div>

        </div>

       </div>


       </>
    )
}
 
export default right;
