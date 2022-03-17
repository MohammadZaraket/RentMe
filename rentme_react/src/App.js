import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import Terms from "./pages/Terms";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";

function App({ children }) {
    return (
        <div className="App">
           
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="Main" element={<Main />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="SignIn" element={<SignIn />} />
                <Route path="Terms" element={<Terms />} />
                <Route path="SignUp" element={<SignUp />} />
            </Routes>
        </div>
    );

    function Landing() {
        return (
            <>
            <SignIn />
            </>
        );
    }

};  
export default App;