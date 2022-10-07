import Counter from "./Counter";
import { Routes, Route,  } from "react-router-dom";
import Form from "./Form";
import Links from "./Links";
import Fetch from './Fetch.js'
import Time from './time.js'
import ColourChange  from './ColourChange.js'
import Queue from './Queue.js'
import Effect from './Effect.js'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/form" element={<Form />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/time" element={<Time />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/colourchange" element={<ColourChange />} />
        <Route path="/effect" element={<Effect  />} />
      </Routes>
    </>
  );
}

export default App;
