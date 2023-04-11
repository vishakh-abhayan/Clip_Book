import React from "react";
import "./ClipBook.css";

function ClipBooks() {
  const clipBooks = [
    {
      id: 1,
      lable: "Instagram",
    },
    {
      id: 2,
      lable: "Instagram",
    },
    {
      id: 3,
      lable: "Instagram",
    },
    {
      id: 4,
      lable: "Instagram",
    },
    {
      id: 5,
      lable: "Instagram",
    },
    {
      id: 3,
      lable: "Instagram",
    },
    {
      id: 4,
      lable: "Instagram",
    },
    {
      id: 5,
      lable: "Instagram",
    },
  ];

  return (
    <div className="book_box">
      <form action="" className="book_form">
        <label className="clip_lable">Enter clipbook name</label>
        <input className="book_input" type="text" />
      </form>
      <div className="book_container">
        {clipBooks.map(({ id, lable }) => (
          <div key={id} className="clip_book">
            <h1>{lable}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClipBooks;
