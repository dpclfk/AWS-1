import { ChangeEvent, Component, ReactNode, KeyboardEvent } from "react";

interface IProps {
  add(content: string): void;
}
interface IState {
  content: string;
}

export default class Add extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { content: "" };
  }

  add = (): void => {
    if (!this.state.content) return;
    console.log(this.props);

    this.props.add(this.state.content);
    console.log(this.props);

    this.setState({ content: "" });
  };

  render(): ReactNode {
    return (
      // <div className="flex items-center gap-2 p-1 border-b-4 border-black border-double">
      <form
        className="flex items-center gap-2 p-1 border-b-4 border-black border-double"
        onSubmit={(e) => {
          e.preventDefault();
          this.add();
        }}
      >
        <label htmlFor="todo-content">Todo:</label>
        <input
          className="flex-1 border rounded border-gray-500"
          type="text"
          id="todo-content"
          value={this.state.content}
          // onInput={(e: ChangeEvent<HTMLInputElement>) => {
          //   console.log(e.target.value);
          //   this.setState({ content: e.target.value });
          // }}
          onInput={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
            this.setState({ content: value });
          }}
          onKeyUp={({ key }: KeyboardEvent<HTMLInputElement>) => {
            // if (key == "Enter") {
            //   this.add();
            // }
            // console.log(e.key)
          }}
        />
        <button
          className="border border-gray-400 rounded-[8px] p-1 px-2 select-none"
          // onClick={() => {
          //   this.props.add(this.state.content);
          //   this.setState({ content: "" });
          // }}
          // onClick={this.add}
        >
          추가
        </button>
      </form>
      // </div>
    );
  }
}
