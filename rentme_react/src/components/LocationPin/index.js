
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,BsSearch } from "react-icons/fa";




const LocationPin = ({ text }) => (
    <div className="pin">
     <FaFacebookSquare size={50} />
     <FaInstagram/>
      <p className="pin-text">{text}</p>
    </div>
  )



  export default LocationPin;