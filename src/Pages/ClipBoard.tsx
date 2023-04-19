import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import "./ClipBoard.css";

function ClipBoard() {
  interface boards {
    id: number;
    lable: string;
  }
  let clipBoards: boards[] = [
    { id: 1, lable: "https://helleo.com/hey" },
    { id: 2, lable: "https://helleo.com/hey" },
    { id: 3, lable: "https://helleo.com/hey" },
    { id: 4, lable: "https://helleo.com/hey" },
  ];

  return (
    <div className="book_box">
      <Link to="/">
        <BsArrowLeftShort className="arrow_back" size={40} />
      </Link>
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
      <div className="board_container">
        {clipBoards.map(({ id, lable }) => (
          <Link to="/boards" style={{ textDecoration: "none", color: "black" }}>
            <div key={id} className="clip_boards">
              <h1>{lable}</h1>
              <FaPen className="board_edit" size={20} />
              <MdDelete className="board_delete" size={30} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ClipBoard;
