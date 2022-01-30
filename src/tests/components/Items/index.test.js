import React from "react";
import { render, screen } from "@testing-library/react";
import Items from "../../../components/Items";

test("renders items list", () => {
  render(<Items />);
  const heading = screen.getByText(/Shop Online/i);
  expect(heading).toBeInTheDocument();
});

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

test.each(items)("renders list of items", (label) => {
  render(<Items />);
  expect(screen.getByText(`Name: ${label.name}`)).toBeInTheDocument();
  expect(
    screen.getByText(`Price: ${label.price} ${label.currency}`)
  ).toBeInTheDocument();
});

test("renders image", () => {
  render(<Items />);
  const image = screen.getAllByRole("img")[0];
  expect(image).toHaveAttribute("src", items[0].img);
  expect(image).toHaveAttribute("alt", "phone");
});
