import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Profile from "../pages/Profile";


export const ABOUTUS_ROUTE = {
    path:'/aboutus',
    name:'about us',
    component:AboutUs,
}

export const CONTACTUS_ROUTE = {
    path:'/contactus',
    name:'contact us',
    component:ContactUs
}



export const PROFILE = {
    path:'/profile',
    name:'profile',
    component:Profile
}



export const NAVBAR_ROUTE = [

    ABOUTUS_ROUTE,
    CONTACTUS_ROUTE,
    PROFILE
]