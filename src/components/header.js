import {Link} from 'react-router-dom'
import "./header.css"
import profile from "./images/profile.jpeg"
import images from "./images/images.png"
function Header() {
  return (
    <div className="header bg-slate-950 relative" >
       
      <img className='img' src={profile} alt="profile"/>
      <div className='image'>
      
      <div className='profile'> 
      <h4 className='uppercase font-extrabold text-white text-1xl mr-16'>pedagadi chandra sekhar</h4><br>
      </br>
      <p className='proffesion-name text-blue-300'>FULL STACK DEVELOPER</p>
      </div>
      <img className='mern' src={images} alt="profile"/>
      </div>
      <div className='btn'>
      <Link to="/submit"><button className='absolute top-0 right-0 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 mt-16 rounded-full'>to add project</button></Link>
      </div>
     

     
    </div>
  );
}

export default Header;
