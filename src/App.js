import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";

import LoginPanel from "./Header/LoginPanel";
import Navbar from "./Header/Navbar";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Education from "./Education/Education";
import Food from "./Food/Food";
import DetailPage from "./DetailPage/DetailPage";
import RForm from "./Ngo Form/RForm";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Feedback from "./Feedback/Feedback";
import PopupButton from "./pop-up Form/popForm";
import LoginNgo from "./Login Ngo/LoginNgo";
import HomeNgo from "./NGOportal/HomePage/HomeNgo";

function App(){
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    // console.log(selectedCategory);
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home handleCategoryClick={handleCategoryClick}/>}></Route>
                    <Route path="/:category" element={<Education category={selectedCategory}/>}></Route>
                    {/* <Route path="/Food" element={<Food/>}></Route> */}
                    <Route path="/:category/detailpage/:id" element={<DetailPage/>}></Route>
                    <Route path="/rform" element={<RForm/>}></Route>
                    <Route path="/loginNgo" element={<LoginNgo/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/feedback" element={<Feedback/>}></Route>
                    <Route path="/pop" element={<PopupButton/>}></Route>
                    {/* <Route path="/ngopage" element={<HomeNgo/>}></Route> */}
                </Route>
            </Routes>
        </BrowserRouter>        
    </>
    )
}
export default App;