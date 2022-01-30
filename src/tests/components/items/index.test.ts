import { render, screen } from "@testing-library/react";
import Item from "../../../components/items";

test("renders learn react link", () => {
  render(<Item />);
  const heading = screen.getByText(/Shop Online/i);
  expect(heading).toBeInTheDocument();
});
