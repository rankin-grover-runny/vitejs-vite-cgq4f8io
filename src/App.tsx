import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from "./pages/new";
import Gallery from "./pages/gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
