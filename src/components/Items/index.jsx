import React from "react";

const items = [
  {
    id: 1,
    name: "samsung",
    price: 5,
    img: "https://www.w3schools.com/html/img_girl.jpg",
    currency: "USD",
  },
  {
    id: 2,
    name: "galaxy",
    price: 8,
    img: "https://www.w3schools.com/html/pic_trulli.jpg",
    currency: "USD",
  },
  {
    id: 3,
    name: "tv",
    price: 7,
    img: "https://www.w3schools.com/html/img_chania.jpg",
    currency: "USD",
  },
];

const Items = () => {
  return (
    <>
      <h1>Shop Online</h1>
      {items.map((item) => (
        <ul key={item.id}>
          <li>Name: {item.name}</li>
          <li>Price: {`${item.price} ${item.currency}`} </li>
          <li>
            <img src={item.img} alt="phone" />
          </li>
        </ul>
      ))}
    </>
  );
};
export default Items;
