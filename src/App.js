import Counter from './Counter';
import { Routes, Route, Link } from "react-router-dom";
import Form from './Form';
import Links from './Links';
function App() {
  return (
    <>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/" element={<Links />} />
      </Routes>
    </>
  );
}

export default App;
