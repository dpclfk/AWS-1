import { ChangeEvent, FC } from "react";
// import { Todo } from "../../hooks/todoList";

export interface IProps {
  // todo: Todo;
  // addTodo: () => void;
  content: string;
  priority: number;
  limit: string;
  addtest(): void;
  changeContent({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  // changeisComplete({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changepriority({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  // changecreatedAt({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changelimit({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  // ChangeEvent<HTMLInputElement>
  // setaddtest: React.Dispatch<React.SetStateAction<Todo[]>>;
}

// content: string;
// isComplete: boolean;
// priority: number;
// createdAt: string;
// limit: string;

// content: "테스트중",
// isComplete: true,
// priority: 1,
// createdAt: "asd",
// limit: "asd",

const Comp: FC<IProps> = ({
  content,
  // isComplete,
  priority,
  // createdAt,
  limit,
  addtest,
  changeContent,
  // changeisComplete,
  changepriority,
  // changecreatedAt,
  changelimit,
}) => {
  return (
    <div>
      <input type="text" value={content} onInput={changeContent}></input>
      <input type="number" value={priority} onInput={changepriority}></input>
      <input type="date" value={limit} onInput={changelimit}></input>

      <button onClick={addtest}>등록</button>
    </div>
  );
};

export default Comp;
