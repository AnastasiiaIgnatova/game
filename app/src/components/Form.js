import React from "react";
import { useDispatch } from "react-redux";
import { addNewElement } from "../store/dataSlice";

function Form() {
  let myRef = React.createRef();
  const dispatch = useDispatch();

  function triggerAction(event) {
    event.preventDefault();
    dispatch(addNewElement(myRef.current.value));
    myRef.current.value = "";
  }

  return (
    <div className="form-div">
      <form onSubmit={triggerAction}>
        <input type="search" placeholder="Введите номер" ref={myRef} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Form;
