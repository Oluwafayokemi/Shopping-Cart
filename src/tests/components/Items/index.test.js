import React from "react";
import { render, screen } from "@testing-library/react";
import Items from "../../../components/Items";
import userEvent from "@testing-library/user-event";

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
  expect(screen.getByText(`${label.name}`)).toBeInTheDocument();
  expect(
    screen.getByText(`${label.price} ${label.currency}`)
  ).toBeInTheDocument();
});

test("renders image", () => {
  render(<Items />);
  const image = screen.getAllByRole("img")[0];
  expect(image).toHaveAttribute("src", items[0].img);
  expect(image).toHaveAttribute("alt", "Denim Jeans");
});

test("renders add to cart button", () => {
  render(<Items />);
  const button = screen.getAllByRole("button", {name: /Add to cart/i})[0];
  expect(button).toBeInTheDocument();
});

test("renders add to cart button for every list item", () => {
  render(<Items />);
  const button = screen.getAllByRole('button')
  expect(button.length).toEqual(3)
});

test("renders a dialogue box onClick of button", () => {
  render(<Items />);
  const button = screen.getAllByRole("button", {name: /Add to cart/i})[0];
  userEvent.click(button)
  const box = screen.getByText(/Checkout/i)
  expect(box).toBeInTheDocument()
});

test("Should not render a dialogue box if button is not clicked", () => {
  render(<Items />);
  const box = screen.queryByText(/Checkout/i)
  expect(box).not.toBeInTheDocument()
});


