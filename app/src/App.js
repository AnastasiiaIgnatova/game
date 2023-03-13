import "./App.css";

import Form from "./components/Form";
import CounterContainer from "./containers/CounterContainer";
import ResponsesContainer from "./containers/ResponsesContainer";

function App() {
  return (
    <>
      <div className="container">
        <CounterContainer />
        <Form />
        <ResponsesContainer />
      </div>
    </>
  );
}

export default App;
