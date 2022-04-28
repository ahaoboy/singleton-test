import { getState } from "singleton-test-core";
import { dec, getCount } from "singleton-test-use";

console.log(getState().count, getCount());
dec();
console.log(getState().count, getCount());
function App() {
  return (
    <div>{/* <button onClick={() => store.count++}>inc count</button> */}</div>
  );
}
export default App;
