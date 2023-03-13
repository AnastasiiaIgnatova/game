function Counter(props) {
  return (
    <div className="counter-div">
      <p>Посещено локаций: {props.counter}</p>
    </div>
  );
}

export default Counter;
