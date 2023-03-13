function Response(props) {
  let title = props.number;
  if (props.name !== undefined) {
    title += ` (${props.name})`;
  }

  return (
    <div className="response">
      <h4>{title}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default Response;
