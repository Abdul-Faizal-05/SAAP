import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from '../src/Components/Landing/Landing';
import Register from "./Components/Regiseter/Register";
import Login from "./Components/Login/Login";

function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
