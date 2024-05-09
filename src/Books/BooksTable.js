import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BookTable.module.css";

export default function BooksTable({ books }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedBooks = [...books].sort((a, b) => {
    if (sortConfig.key !== null) {
      if (sortConfig.key === "price") {
        const priceA = parseFloat(a.price.amount);
        const priceB = parseFloat(b.price.amount);
        if (priceA < priceB) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (priceA > priceB) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      } else {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      }
    } else {
      return 0;
    }
  });

  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <img src={"/up.svg"} alt="up arrow" className={styles.icon} />
      ) : (
        <img src={"/down.svg"} alt="down arrow" className={styles.icon} />
      );
    } else {
      return null;
    }
  };

  return (
    <table className={styles["books-container"]}>
      <thead>
        <tr className={styles["row-head"]}>
          <th onClick={() => requestSort("name")}>
            <span>Name</span> {renderSortIcon("name")}
          </th>
          <th onClick={() => requestSort("authorName")}>
            <span>Author Name</span> {renderSortIcon("authorName")}
          </th>
          <th onClick={() => requestSort("price")}>
            <span>Price</span> {renderSortIcon("price")}
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sortedBooks.map((book) => {
          return (
            <tr key={book.id} className={styles.row}>
              <td>
                <Link className={styles.link} to={`/books/${book.id}`}>
                  {book.name}
                </Link>
              </td>
              <td>{book.authorName}</td>
              <td>{`${book.price.amount} ${book.price.currency}`}</td>
              <td>
                <button type="button" disabled={book.bookCount === 0} className={styles["buy-btn"]}>
                  Buy
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
