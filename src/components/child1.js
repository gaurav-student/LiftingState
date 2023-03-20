import Child2 from "./child2";

const Child1 = (props) => {
  const betwenstate = (value) => {
    props.onparentstate(value);
  };
  return (
    <>
      <h1>Form </h1>
      <Child2 onstateUp={betwenstate} />
    </>
  );
};
export default Child1;
