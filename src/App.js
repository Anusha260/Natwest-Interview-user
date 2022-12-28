import "./App.css"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import {Link,Routes,Route} from "react-router-dom"
export default function App(){
  return(
    <div>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/Signup">Signup</Link>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
    </Routes>
    </div>
  )
}
