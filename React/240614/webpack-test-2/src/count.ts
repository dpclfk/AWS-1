export interface ICount {
  getCount(): number;
  increment(): number;
}
// Closures
function setCount(): ICount {
  let count = 0;
  return {
    getCount: (): number => count,
    increment: (): number => ++count,
  };
}

// const count: ICount = setCount();
// count.getCount();
// count.increment();
export default setCount() as ICount;
