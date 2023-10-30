import Background from "./components/Background"
import Home from "./pages/Home"
import Header from "./components/Header"
import About from "./pages/About"
import Applications from "./pages/Applications"
import Raw from "./pages/Raw"
import Resources from "./pages/Resource"
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
    <Header/>
    <Background/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/features" element={<Home/>} />
      <Route path="/raw" element={<Raw/>} />
      <Route path="/applications" element={<Applications/>} />
      <Route path="/resources" element={<Resources/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
