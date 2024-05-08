import React, { useRef, useState } from "react";
import styles from "./CSVUploader.module.css";

const CSVUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const inputRef = useRef();

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setSelectedFile(files);
    }
  };

  const clearCSV = () => {
    setSelectedFile(null);
  };

  return (
    <section className={styles["upload-csv"]}>
      <p className={styles["load-books-text"]}>Load books to inventory</p>
      <section className={styles["browse-section"]}>
        <input
          type="file"
          accept=".csv"
          className={styles["upload-input"]}
          ref={inputRef}
          onChange={handleFileChange}
          key={Date.now()}
          multiple
        />
        <p className={styles["browse-file-text"]}>Browse&nbsp;file(s)</p>
        <img
          src={"/addIcon.svg"}
          alt="Browse file"
          data-testid="testBrowseFile"
          role="button"
          className={styles["browse-icon"]}
          onClick={() => inputRef.current.click()}
        />
        {selectedFile && (
          <>
            <p className={styles["csv-name"]}>
              {selectedFile[0].name}
              {selectedFile.length > 1 ? `, +${selectedFile.length - 1}` : ""}
            </p>
            <img
              src={"/closeLineIcon.svg"}
              alt="Remove CSV"
              data-testid="testRemoveCSV"
              className={styles.icon}
              onClick={clearCSV}
            />
          </>
        )}
      </section>

      <button type="button" disabled={!selectedFile} className={styles["upload-btn"]}>
        Upload
      </button>
    </section>
  );
};

export default CSVUploader;
