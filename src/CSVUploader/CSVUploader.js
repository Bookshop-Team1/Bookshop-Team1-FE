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
    <div className={styles["upload-csv"]}>
      <input
        type="file"
        accept=".csv"
        className={styles["upload-input"]}
        ref={inputRef}
        onChange={handleFileChange}
        key={Date.now()}
        multiple
      />
      <button
        type="button"
        className={styles["login-btn"]}
        onClick={() => inputRef.current.click()}
      >
        Upload CSV
      </button>
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
    </div>
  );
};

export default CSVUploader;
