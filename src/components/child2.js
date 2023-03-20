import { useState } from "react";

const Child2 = (props) => {
  const [first, setFirst] = useState("");
  const [Last, setLast] = useState("");

  const handleInputF = (e) => {
    setFirst(e.target.value);
  };
  const handleInputL = (e) => {
    setLast(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = {
      firstname: first,
      Lastname: Last
    };
    props.onstateUp(formdata);
    // console.log(formdata);

    setFirst("");
    setLast("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Firstname:</label>
      <input type="text" value={first} onChange={handleInputF} />
      <br />
      <label>Lastname:</label>
      <input type="text" value={Last} onChange={handleInputL} />
      <br />
      <button>Submit</button>
    </form>
  );
};
export default Child2;
