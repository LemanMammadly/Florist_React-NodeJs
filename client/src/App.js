import {BrowserRouter,Routes,Route,} from "react-router-dom";
import ClientLayout from "./Layout/ClientLayout/ClientLayout.js";
import AdminLayout from "./Layout/AdminLayout/AdminLayout.js";
import AdminHome from "./Admin/AdminHome/AdminHome.jsx";
import LogoDetail from "./Admin/Logo/LogoDetail.jsx";
import UpdateLogo from "./Admin/Logo/UpdateLogo.jsx";
import Home from "./Pages/Home/Home.jsx";
import AddSlider from "./Admin/Slider/AddSlider.jsx";
import SliderDetail from "./Admin/Slider/SliderDetail.jsx";
import UpdateSlider from "./Admin/Slider/UpdateSlider.jsx";
import AddCategory from "./Admin/Category/AddCategory.jsx";
import CategoryDetail from "./Admin/Category/CategoryDetail.jsx";
import UpdateCategory from "./Admin/Category/UpdateCategory.jsx";
import AddArrival from "./Admin/Arrival/AddArrival.jsx";

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
      <Route path="/admin/sliderdetail" element={<SliderDetail/>} />
      <Route path="/admin/updateslider/:id" element={<UpdateSlider/>} />
      <Route path="/admin/addcategory" element={<AddCategory/>} />
      <Route path="/admin/categorydetail" element={<CategoryDetail/>} />
      <Route path="/admin/updatecategory/:id" element={<UpdateCategory/>} />
      <Route path="/admin/addarrival" element={<AddArrival/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
