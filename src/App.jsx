import Cv from "./Pages/Cv"
import CvMaker from "./Pages/CvMaker"

import '@fortawesome/fontawesome-free/css/all.css';
import "./App.css"
import { BrowserRouter ,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
       
         <div className="bg-white">
       
       <Routes> 
          <Route path="/" element={<CvMaker/>}/>
          <Route path="/cv" element={<Cv/>}/> 
           {/* <Cv/>   */}
       </Routes>
       
         </div>
    
    </BrowserRouter>

  )
}

export default App