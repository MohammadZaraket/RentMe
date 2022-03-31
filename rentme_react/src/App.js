import React, { useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Results from "./pages/Results";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import 'firebase/compat/messaging';

import { initializeApp } from 'firebase/app';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore'


function App() {

    const firebaseConfig = {
        apiKey: "AIzaSyDbB1ktOk-9aCMwx3sFebRusVBp86BkOnI",
        authDomain: "rentme-c5f6d.firebaseapp.com",
        projectId: "rentme-c5f6d",
        storageBucket: "rentme-c5f6d.appspot.com",
        messagingSenderId: "508553252190",
        appId: "1:508553252190:web:4ed3219421b805ce0f53cf"
    };
    
    const app = initializeApp(firebaseConfig);
    
    async function getCities() {
        const db = getFirestore(app);
        const citiesCol = collection(db, 'cities');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        console.log(cityList);
     }
   
    return (
        <div className="App">
           
            <Routes>
                <Route path="*" element={<Landing />} />
                <Route path="main" element={<Main />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="results" element={<Results />} />
                <Route path="details/:id" element={<Details />} />
                <Route path="profile" element={<Profile />} />
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