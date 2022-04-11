<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](#project-philosophy) • [WIREFRAMES](#wireframes) • [TECH STACK](#tech-stack) • [IMPLEMENTATION](#implementation) • [HOW TO RUN?](#how-to-run)**


</div>

<br><br>


<img src="./readme/title2.svg" id="project-philosophy"/>

> Rent Me is a Rental Property website where users can search for nearby apartments or apartments in a specific city.
> 
> User can search either by location or by specifications of the apartment.

### User Stories

- As a user, I want to search for nearby Apartments, so that I can quickly find and check them. 
- As a user, I want to be able to search for apartments in different cities so that I won't be limited to my current location.
- As a user, I want to be able check the location of an apartment on the map.
- As a user, I want to check the availability of the apartment, so that I can request a physical tour before rent.
- As a user, I want to be able to add my own apartment and have the option to modify its details.


<br><br>

<img src="./readme/title3.svg" id="wireframes"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that no finished template was used, all from scratch and using pure css modules

| Main Page  |
| -----------------|
| ![Main Page ](https://github.com/MohammadZaraket/RentMe/blob/9db171b6cd9cae66be4aea7914b92b65cc5ecb4e/readme/main_page.png) |


| Apartments' Results  | Apartment's Details  |
| -----------------| -----|
| ![Apartments results](https://github.com/MohammadZaraket/RentMe/blob/9db171b6cd9cae66be4aea7914b92b65cc5ecb4e/readme/results%20page.png) | ![Apartment's Details](https://github.com/MohammadZaraket/RentMe/blob/9db171b6cd9cae66be4aea7914b92b65cc5ecb4e/readme/details%20page.png)|


<br><br>

<img src="./readme/title4.svg" id="tech-stack"/>

Here's a brief high-level overview of the tech stack the RentMe Website uses:

- This project used Laravel - the PHP web framework- as a backend to implement different APIs.
- For Frontend, the website uses React which is a JavaScript library for building user interfaces based on UI components.
- For storage, the project uses MySQL to save users and apartments data.
- The website integrates with Firebase messaging service to push notifications to users.
- The website also integrates with different geolocation services from Google maps APIs and Mapbox APIs.




<br><br>
<img src="./readme/title5.svg"  id="implementation"/>

> Using the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the website is shown as below, these are screenshots from the real Website

| Main Page  |
| -----------------|
| ![Main Page](https://github.com/MohammadZaraket/RentMe/blob/184ccd4bbdd8d6c0e9c70f81cfff0f8f131aad6d/readme/main-page-front.PNG) | 


| Results  | Details  |
| -----------------| -----|
| ![Results](https://github.com/MohammadZaraket/RentMe/blob/184ccd4bbdd8d6c0e9c70f81cfff0f8f131aad6d/readme/results-page-front.PNG) | ![Details](https://github.com/MohammadZaraket/RentMe/blob/184ccd4bbdd8d6c0e9c70f81cfff0f8f131aad6d/readme/details-page-front.PNG) |

<br>

### Demos

| Search  | Add Apartment  |
| -----------------| -----|
| ![Search](https://github.com/MohammadZaraket/RentMe/blob/14ad72292144323848babc23be688d9aad7ffed8/readme/search-demo.gif) | ![Add Apartment](https://github.com/MohammadZaraket/RentMe/blob/14ad72292144323848babc23be688d9aad7ffed8/readme/add-demo.gif) |

| Request Tour |
| -----------------|
| ![Request Tour](https://github.com/MohammadZaraket/RentMe/blob/14ad72292144323848babc23be688d9aad7ffed8/readme/request-demo.gif) | 


<br><br>

<img src="./readme/title6.svg" id="how-to-run"/>


### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/MohammadZaraket/RentMe.git
   ```
2. Install NPM packages
   ```sh
    npm install @material-ui/core
   ```
   ```sh
    npm install firebase
   ```
   ```sh
    npm install google-map-react
   ```
   ```sh
    npm install react-map-gl
   ```
   ```sh
    npm install --save date-fns
   ```
      ```sh
    npm i react-phone-input-2
   ```
3. Get a free API Key at Google Maps API Services

4. Get a free public API Key at [https://mapbox.com](https://mapbox.com)

5. Enter your API in `.env`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
