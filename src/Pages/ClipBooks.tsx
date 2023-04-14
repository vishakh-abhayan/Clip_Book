import React, { useState, useEffect } from "react";
import GithubCorner from "react-github-corner";
import "./ClipBook.css";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ClipBook {
  id: number;
  label: string;
}

function ClipBooks(): JSX.Element {
  const [bookName, setBookName] = useState<string>("");
  const [clipBooks, setClipBooks] = useState<ClipBook[]>(() => {
    const storedClipBooks = localStorage.getItem("clipBooks");
    return storedClipBooks ? JSON.parse(storedClipBooks) : [];
  });

  // Function to handle input change
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setBookName(event.target.value);
  };

  // Function to handle form submit
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (bookName) {
      // If book name is not empty
      const newBook: ClipBook = {
        id: new Date().getTime(),
        label: bookName,
      };
      setClipBooks((prevClipBooks) => [...prevClipBooks, newBook]);
      setBookName(""); // Clear input value
    }
  };

  // Use useEffect to update local storage after updating state
  useEffect(() => {
    localStorage.setItem("clipBooks", JSON.stringify(clipBooks));
  }, [clipBooks]);

  return (
    <div className="book_box">
      <GithubCorner
        direction="left"
        octoColor="#ffe983"
        className="github_icon"
      />
      <h1 className="clip_head">Clip_Book</h1>
      <form onSubmit={handleFormSubmit} className="book_form">
        <input
          placeholder="Enter Book name"
          className="book_input"
          type="text"
          value={bookName}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="input_submit">
          <FaBook size={20} color="#fff" />
        </button>
      </form>
      <div className="book_container">
        {clipBooks.map(({ id, label }) => (
          <Link to="/boards" style={{ textDecoration: "none", color: "black" }}>
            <div key={id} className="clip_book">
              <h1>{label}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ClipBooks;
