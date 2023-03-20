import Child1 from "./components/child1";
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState();
  const morestate = (value) => {
    setValue(value);
  };
  // console.log(value);

  return (
    <div className="App">
      <h1>{value.firstname}</h1>
      <Child1 onparentstate={morestate} />
    </div>
  );
}
