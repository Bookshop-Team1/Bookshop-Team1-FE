import React from "react";
import { Image, Rate } from "antd";

import { Descriptions } from "antd";

function BookDetail({ bookDetails }) {
  const items = [
    {
      key: "1",
      label: "Name",
      children: bookDetails?.name,
    },
    {
      key: "2",
      label: "Author",
      children: bookDetails?.authorName,
    },
    {
      key: "3",
      label: "Price",
      children: `${bookDetails?.price?.currency} ${bookDetails?.price?.amount}`,
    },
    {
      key: "4",
      label: "Image",
      children: <Image width={200} src={bookDetails?.imageUrl} />,
    },
    {
      key: "5",
      label: "Rating",
      children: <Rate value={bookDetails?.averageRating} />,
      span: 2,
    },

    {
      key: "6",
      label: "Description",
      children: bookDetails?.description,
    },
    {
      key: "7",
      label: "Availability",
      children: bookDetails?.availability == true ? "Yes" : "No",
    },
  ];

  //api call using the id to load book data
  return (
    <div>
      <Descriptions title="Book Details" bordered items={items} />
    </div>
  );
}

export default BookDetail;
