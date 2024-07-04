import { Suspense } from "react";
import Todo from "./components/todo";

const App = (): JSX.Element => {
  return (
    <>
      <h1>testig</h1>
      <Suspense fallback={<h1>Now Loading</h1>}>
        <Todo />
      </Suspense>
    </>
  );
};

export default App;
