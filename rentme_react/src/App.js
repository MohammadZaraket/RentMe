import React, { useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import Terms from "./pages/Terms";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Results from "./pages/Results";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import 'firebase/compat/messaging';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';

import { initializeApp } from 'firebase/app';
import { collection, getDocs } from 'firebase/firestore';
import { getMessaging, getToken } from "firebase/messaging";
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
    
    // Get a list of cities from your database
    async function getCities() {
        const db = getFirestore(app);
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
    //return cityList;
    }

   /*     const messaging = getMessaging();
        getToken(messaging, { vapidKey: 'BK3q6ixBB6Nj0BUrfyKJlFCdXog6R5JLsV0TOaqKSQ_s7a8fNYjou18IdK5NrC-gQ01OwgS9A7swPW6TZY8k-Nk' }).then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            console.log(currentToken);
            return true;
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            return false;
            // ...
        }
        }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        return false;
        // ...
        });
      */

  
   /*     const firebaseConfig = {

            apiKey: "AIzaSyDbB1ktOk-9aCMwx3sFebRusVBp86BkOnI",
            authDomain: "rentme-c5f6d.firebaseapp.com",
            projectId: "rentme-c5f6d",
            storageBucket: "rentme-c5f6d.appspot.com",
            messagingSenderId: "508553252190",
            appId: "1:508553252190:web:4ed3219421b805ce0f53cf"
        
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        // Initialize Firebase Cloud Messaging and get a reference to the service
        const messaging = getMessaging(app);

        getToken(messaging, { vapidKey:"BK3q6ixBB6Nj0BUrfyKJlFCdXog6R5JLsV0TOaqKSQ_s7a8fNYjou18IdK5NrC-gQ01OwgS9A7swPW6TZY8k-Nk"}).then((currentToken) => {
            if (currentToken) {
                console.log(currentToken);

            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
              // ...
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
          });
*/
   
    return (
        <div className="App">
           
            <Routes>
                <Route path="*" element={<Landing />} />
                <Route path="Main" element={<Main />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="Terms" element={<Terms />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route path="Results" element={<Results />} />
                <Route path="Details/:id" element={<Details />} />
                <Route path="Profile" element={<Profile />} />
            </Routes>
        </div>
    );

    function Landing() {
        return (
            <>
            <SignIn />
            <Button> click</Button>
            </>
        );
    }

};  
export default App;