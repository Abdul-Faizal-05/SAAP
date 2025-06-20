import { BrowserRouter,Routes,Route } from "react-router-dom"
import Landing from '../src/Components/Landing/Landing'
import Register from "./Components/Regiseter/Register";

function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
