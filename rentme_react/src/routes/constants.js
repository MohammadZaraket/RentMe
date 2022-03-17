import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Terms from "../pages/Terms";
import Profile from "../pages/Profile";
//import SignIn from "../pages/SignIn";


export const ABOUTUS_ROUTE = {
    path:'/AboutUs',
    name:'AboutUs',
    component:AboutUs,
}

export const CONTACTUS_ROUTE = {
    path:'/ContactUs',
    name:'ContactUs',
    component:ContactUs
}


export const TERMS = {
    path:'/Terms',
    name:'Terms',
    component:Terms
}

export const PROFILE = {
    path:'/Profile',
    name:'Profile',
    component:Profile
}



export const NAVBAR_ROUTE = [

    ABOUTUS_ROUTE,
    TERMS,
    CONTACTUS_ROUTE,
    PROFILE
]