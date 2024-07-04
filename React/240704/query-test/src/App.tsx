import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}
const keys = ["todo"];

const App = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { data, isError, isPending } = useQuery<ITodo[]>({
    queryKey: [keys, "list"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3080/api/todo/1");
      console.log(data);
      // throw new Error("test") // 무조건 에러를 반환하여 plz retry가 뜨게된다
      return data;
    },
    // refetchInterval: 1000,
    // refetchOnWindowFocus: false,
  });
  // console.log(data);

  // const query = useQuery<ITodo[]>({
  //   queryKey: ["list", "todo", { a: 1, b: undefined }],
  //   queryFn: async () => {
  //     const { data } = await axios.get(`http://localhost:3080/api/todo/${page}`);
  //     console.log(data);
  //     // throw new Error("test") // 무조건 에러를 반환하여 plz retry가 뜨게된다
  //     return data;
  //   },
  // });

  // const { data, isError, isPending, mutate } = useMutation({
  //   mutationKey: ["todo", "list"],
  //   mutationFn: async (page: number) => {
  //     const { data } = await axios.get(`http://localhost:3080/api/todo/${page}`);
  //     console.log(data);
  //     return data as ITodo[];
  //   },
  // });

  // useEffect(() => {
  //   mutate(page);
  // }, [page]);
  // console.log(data);

  if (isPending) return <h1>now loading</h1>;
  if (isError) return <h1>plz retry</h1>;

  return (
    <div>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        up
      </button>
      {data?.map((item) => (
        <div>{item.content}</div>
      ))}
    </div>
  );
};
export default App;
