import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./components/Input";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
