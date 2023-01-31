import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Signup, Recovery, Splash, VerifyEmail } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/recovery" element={<Recovery />}></Route>
        <Route path="/verifyemail" element={<VerifyEmail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
