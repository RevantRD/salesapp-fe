import AddSales from "./components/AddSales";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import TodaysRevenue from "./components/TodaysRevenue";
import Top5Sale from "./components/Top5Sale";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    //Adding routes for display different components in a single page
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/addsales" element={<AddSales />}></Route>
        <Route path="/topsales" element={<Top5Sale />}></Route>
        <Route path="/todaysrevenue" element={<TodaysRevenue />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
