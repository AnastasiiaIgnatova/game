import { useSelector } from "react-redux";
import { selectData } from "../store/dataSlice";
import Response from "../components/Response";

function ResponsesContainer() {
  const responsesData = useSelector(selectData);

  return (
    <div>
      <ul>
        {Object.values(responsesData).map((item, index) => (
          <li key={`${index}_${item.number}`}>
            <Response number={item.number} name={item.name} text={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResponsesContainer;
