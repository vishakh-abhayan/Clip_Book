import { FaPen } from "react-icons/fa";

function ClipBoard() {
  return (
    <div className="book_box">
      <h1 className="clip_head">Clip_Board</h1>
      <form className="book_form">
        <input
          placeholder="Enter Book name"
          className="book_input"
          type="text"
          // value={bookName}
          // onChange={handleInputChange}
        ></input>
        <button type="submit" className="input_submit">
          <FaPen size={20} color="#fff" />
        </button>
        {/* <button type="submit" className="input_submit">
          <FaBook size={20} color="#fff" />
        </button> */}
      </form>
      <div className="book_container">
        {/* {clipBooks.map(({ id, label }) => (
      <Link to="/boards" style={{ textDecoration: "none", color: "black" }}>
        <div key={id} className="clip_book">
          <h1>{label}</h1>
        </div>
      </Link>
    ))} */}
      </div>
    </div>
  );
}

export default ClipBoard;
