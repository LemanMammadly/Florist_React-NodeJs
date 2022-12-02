import {BrowserRouter,Routes,Route,} from "react-router-dom";
import ClientLayout from "./Layout/ClientLayout/ClientLayout.js";
import AdminLayout from "./Layout/AdminLayout/AdminLayout.js";
import AdminHome from "./Admin/AdminHome/AdminHome.jsx";
import LogoDetail from "./Admin/Logo/LogoDetail.jsx";
import UpdateLogo from "./Admin/Logo/UpdateLogo.jsx";
import Home from "./Pages/Home/Home.jsx";
import AddSlider from "./Admin/Slider/AddSlider.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClientLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
      <Route index element={<AdminHome/>}/>
      <Route path="/admin/logodetail" element={<LogoDetail/>} />
      <Route path="/admin/updatelogo/:id" element={<UpdateLogo/>} />
      <Route path="/admin/addslider" element={<AddSlider/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
