import Dashboard from "./Screens/Dashboard"
import Login from "./Screens/Login"
import Signup from "./Screens/Signup"
import { Route, Routes } from "react-router-dom"
import Products from "./SecComponent/ProDuct/Product"
function App() {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/dashboard/product/:id" element={<Products/>}/>

    </Routes>
    </>
  )
}
export default App
