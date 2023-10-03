import Regiter from "./pages/Register/register.component";
import Dashbord from "./pages/Dashbord/dashbord.component";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Regiter />} />
      <Route path="/dashbord" element={<Dashbord />} />
    </Routes>
  );
};

export default App;
