import Button from "./buttons";
import './Side-bar.scss';

function Left(props) {
  return (
    <div class="left-cont left">
     <center>
     <button class="btns">
        {" "}
        <i class="fas fa-plus"></i> Add Post
      </button></center>
      <h3>Menu</h3>
      <Button type="Profile" />
      <Button type="Saved Post" />
      <Button type="Explore" />
      <center>
      <button class="btns" onClick={props.Logout}> Logout</button></center>
    </div>
  );
}

export default Left;
