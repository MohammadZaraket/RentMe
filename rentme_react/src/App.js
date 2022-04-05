import React, { useState, useEffect} from 'react';
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Results from "./pages/Results";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import 'firebase/compat/messaging';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { useDispatch, useSelector } from 'react-redux';


function App() {

    const parameters = useSelector(state => state.signin);
    const [user, setUser] = useState(parameters.auth);

    const firebaseConfig = {
        apiKey: "AIzaSyDbB1ktOk-9aCMwx3sFebRusVBp86BkOnI",
        authDomain: "rentme-c5f6d.firebaseapp.com",
        projectId: "rentme-c5f6d",
        storageBucket: "rentme-c5f6d.appspot.com",
        messagingSenderId: "508553252190",
        appId: "1:508553252190:web:4ed3219421b805ce0f53cf"
    };
    
    const app = initializeApp(firebaseConfig);
    
     const ProtectedRoute = ({ user, children }) => {
        useEffect(() => {
            setUser(parameters.auth);
          },[user]);

        if (!user) {
          return <Navigate to="/" replace />;
        }
      
        return children;
      };

   
    return (
        <div className="App">
           
            <Routes>
                <Route path="*" element={<Landing />} />
                <Route path="signup" element={<SignUp />} />

                <Route path="main" element={ <ProtectedRoute user={user}>  <Main /> </ProtectedRoute>}/>
                <Route path="contactus" element={ <ProtectedRoute user={user}>  <ContactUs /> </ProtectedRoute>}/>
                <Route path="aboutus" element={ <ProtectedRoute user={user}>  <AboutUs /> </ProtectedRoute>}/>
                <Route path="results" element={ <ProtectedRoute user={user}>  <Results /> </ProtectedRoute>}/>
                <Route path="details/:id" element={ <ProtectedRoute user={user}>  <Details /> </ProtectedRoute>}/>
                <Route path="profile" element={ <ProtectedRoute user={user}>  <Profile /> </ProtectedRoute>}/>
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