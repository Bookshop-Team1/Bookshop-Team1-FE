import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseApi from "../BaseApi";
import BookDetail from "./BookDetail";

function BookDetailsContainer() {
  let { id } = useParams();
  const [bookDetails, setBookDetails] = useState({
    
});


  useEffect(() => {
    async function fetchBookDetails() {
      const response = await baseApi.get(`/books/${id}`);
      // eslint-disable-next-line no-console
      
      setBookDetails(response?.data);
    }
    fetchBookDetails();
  }, []);

  return <BookDetail bookDetails={bookDetails} />;
}

export default BookDetailsContainer;
