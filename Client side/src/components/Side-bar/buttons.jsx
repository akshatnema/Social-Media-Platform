function Button(props) {
  const addstyle = (e) => {
    if (document.querySelectorAll(".btn-leftx").length === 1) {
      document.querySelector(".btn-leftx").classList.remove("btn-leftx");
    }
    e.target.classList.add("btn-leftx");
  };
  return (
    <div class="sidebarWrapper">
      <button
        type="button"
        onClick={addstyle}
        class="btn-left "
      >
        {props.type}
      </button>
    </div>
  );
}
export default Button;
