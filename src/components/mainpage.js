import {Link} from 'react-router-dom'
import "./mainpage.css"

function Mainpage() {

  const buttonText = window.innerWidth <= 768 ? 'Explore my world' : 'Click here to explore';


    return (
      <div className="main" >

    <Link to="/data"><button className='btn bg-blue-700 hover:bg-blue-900 text-white 
  font-bold py-2 px-4 w-900 rounded-full flex'>{buttonText}</button></Link>
   
 <p className='para'>Hi welcome to my <br />
 port folio.<br />
  iam a full stack developer <br />
  with 2 years of experince <br />
  if you want to <br />
  know more about me  <br /> 
  
  click that explore 
  </p>


      </div>
    )    
}

export default Mainpage;