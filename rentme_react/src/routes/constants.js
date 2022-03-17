import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Terms from "../pages/Terms";
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

/*export const SIGNIN_ROUTE = {
    path:'/SignIn',
    name:'SignIn',
    component:SignIn
}*/

export const NAVBAR_ROUTE = [
    TERMS,
    ABOUTUS_ROUTE,
    CONTACTUS_ROUTE
]