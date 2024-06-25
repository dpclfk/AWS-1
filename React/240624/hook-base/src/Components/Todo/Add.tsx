import { ChangeEvent, FC } from "react";

export interface IProps {
  content: string;
  priority: number;
  limit: string;
  changeConntent({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  chanPriority({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changeLimit({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  submit(): void;
}

const Add: FC<IProps> = ({
  content,
  priority,
  limit,
  changeConntent,
  chanPriority,
  changeLimit,
  submit,
}) => {
  return (
    <div className="flex items-center gap-2 p-1 border-b-4 border-black border-double">
      <label htmlFor="todo-content">Todo:</label>
      <input
        className="border rounded border-gray-500"
        type="number"
        value={priority}
        onInput={chanPriority}
      />
      <input
        className="flex-1 border rounded border-gray-500"
        type="text"
        value={content}
        onInput={changeConntent}
        placeholder="Todo"
      />
      <input
        className="flex-1 border rounded border-gray-500"
        type="date"
        value={limit}
        onInput={changeLimit}
      />
      <button
        className="border border-gray-400 rounded-[8px] p-1 px-2 select-none"
        onClick={submit}
      >
        추가
      </button>
    </div>
  );
};

export default Add;
