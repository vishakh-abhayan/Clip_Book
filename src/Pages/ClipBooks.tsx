import React from "react";
import GithubCorner from "react-github-corner";
import "./ClipBook.css";
import { FaBook } from "react-icons/fa";

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
      <GithubCorner
        direction="left"
        octoColor="#ffe983"
        className="github_icon"
      />
      <h1 className="clip_head">Clip_Book</h1>
      <form action="" className="book_form">
        <input
          placeholder="Enter Book name"
          className="book_input"
          type="text"
        ></input>
        <button className="input_submit">
          <FaBook size={20} color="#fff" />
        </button>
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
