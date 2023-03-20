import { Route, Routes } from "react-router-dom";
import List from "./containers/List";
import New from "./containers/New";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="new" element={<New />} />
      </Routes>
    </>
  );
}

export default App;
