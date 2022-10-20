import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/MainPage/ClientPage/Home/Home";
// import Navbar from './component/initialPage/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AboutPage from "./component/MainPage/ClientPage/AboutPage/AboutPage";
import ServicesPage from "./component/MainPage/ClientPage/ServicesPage/ServicesPage";
import SingleService from "./component/MainPage/ClientPage/SingleService/SingleService";
import OurProjects from "./component/MainPage/ClientPage/OurProjects/OurProjects";
import OurGallery from "./component/MainPage/ClientPage/OurGallery/OurGallery";
import OurBlogs from "./component/MainPage/ClientPage/OurBlogs/OurBlogs";
import Contact from "./component/MainPage/ClientPage/Contact/Contact";
import CareerPage from "./component/MainPage/ClientPage/CareerPage/CareerPage";
import ApplyNow from "./component/MainPage/ClientPage/ApplyNow/ApplyNow";
import LoginPage from "./component/MainPage/ClientPage/LoginPage/LoginPage";
import ForgetPass from "./component/MainPage/ClientPage/LoginPage/ForgetPass/ForgetPass";
import ResetPass from "./component/MainPage/ClientPage/LoginPage/ResetPass/ResetPass";
import Navbar from "./component/initialPage/navbar/Navbar";
import Footer from "./component/initialPage/Footer/Footer";
import TeamMember from "./component/MainPage/ClientPage/TeamMember/TeamMember";

function App() {
  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/singleService" element={<SingleService />} />
        <Route path="/ourGallery" element={<OurGallery />} />
        <Route path="/teamMember" element={<TeamMember />} />
        <Route path="/ourBlog" element={<OurBlogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/applyNow" element={<ApplyNow />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgetPassword" element={<ForgetPass />} />
        <Route path="/resetPassword" element={<ResetPass />} />
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
