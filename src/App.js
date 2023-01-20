import "./App.css";
import { Splash } from "./pages/splash";
import { Routes, Route } from "react-router-dom";
import { LoginField } from "./pages/login";
import { SignupField } from "./pages/signup";
import { RecoveryField } from "./pages/recovery";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/login" element={<LoginField />}></Route>
        <Route path="/signup" element={<SignupField />}></Route>
        <Route path="/recovery" element={<RecoveryField />}></Route>
      </Routes>
    </div>
  );
}

export default App;
