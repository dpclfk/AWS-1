import { render, screen, fireEvent } from "@testing-library/react";

import TodoList from "../components/TodoList";

describe("Test Todo List", () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test("render Todo List", () => {
    // render(<TodoList />);
    const titleElem = screen.getByText(/Todo List/i);
    expect(titleElem).toBeInTheDocument();
    expect(titleElem.tagName).toBe("H1");
  });

  test("include input Element", () => {
    // render(<TodoList />);
    const inputElem = screen.getByRole("textbox");
    expect(inputElem).toBeInTheDocument();
  });

  test("input text", () => {
    // render(<TodoList />);
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "input test" } });
    expect(inputElem.value).toEqual("input test");
  });

  test("include Add Button", () => {
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    expect(buttonElem).toBeInTheDocument();
  });

  test("Add New Todo", () => {
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    const buttonElem: HTMLButtonElement = screen.getByRole("button", { name: "Add Todo" });

    fireEvent.change(inputElem, { target: { value: "first Todo" } });
    fireEvent.click(buttonElem);

    const listItemElem = screen.getByText("first Todo");
    expect(listItemElem).toBeInTheDocument();
    expect(listItemElem.tagName).toBe("LI");
    const listItemElem2 = screen.getByRole("listitem");
    expect(listItemElem2).toHaveTextContent("first Todo");
  });

  test("Check Todo is work", () => {
    //elems
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    const buttonElem: HTMLButtonElement = screen.getByRole("button", { name: "Add Todo" });
    const result = ["a", "b", "c"];

    //work

    for (let i = 0; i < result.length; i++) {
      fireEvent.change(inputElem, { target: { value: result[i] } });
      fireEvent.click(buttonElem);
    }

    //check
    const ui = screen.getByRole("list");

    for (let i = 0; i < ui.children.length; i++) {
      expect(ui.children[i].tagName).toBe("LI");
      expect(ui.children[i]).toHaveTextContent(result[i]);
    }

    // expect(listItemElem2).toHaveTextContent("first Todo");

    const result2 = [{ value: "a" }, { value: "b" }];

    for (const { value } of result2) {
      console.log(value);
    }
  });
});
