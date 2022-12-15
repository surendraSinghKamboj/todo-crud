import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/List' element={<List />} />
      <Route path="/" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
