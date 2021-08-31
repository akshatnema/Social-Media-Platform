import Button from "./buttons";
import './Side-bar.scss';

function Left(props) {
  return (
    <div class="left-cont left">
      <button class="addpost">
        {" "}
        <i class="fas fa-plus"></i> Add Post
      </button>
      <h3>Menu</h3>
      <Button type="Profile" />
      <Button type="Saved Post" />
      <Button type="Explore" />
      <button class="addpost" onClick={props.Logout}> Logout</button>
    </div>
  );
}

export default Left;
