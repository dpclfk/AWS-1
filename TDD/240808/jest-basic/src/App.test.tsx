import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("full test", () => {
  test("renders learn react link", () => {
    render(<App />);
    console.log(screen);
    const linkElement = screen.getByText(/리액트 테스트중/i);
    console.log(linkElement);
    expect(linkElement).toBeInTheDocument();
  });

  test("list test", () => {
    const tempData = [1, 2, 3];
    render(<App list={tempData} />);

    tempData.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
