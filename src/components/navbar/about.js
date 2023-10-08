import profile from "../images/profile.jpeg"
import "./about.css"

function About() {

  const btn = () => {
    alert("Visit contact page")
  };

    return (
      <div className="App">
       
        <div className="mt-40">
        
       <h1 className="text-red-600 text-5xl font-bold">About us</h1>
       <h5><span className='p-4 italic text-justify'>full stack developer & frontend developer</span></h5>
       <div className="mx-9 bg-blue-200 w-47">
       <p className='mx-9 p-5 italic text-center'>
        iam fullstack web developer. i can provide clean code and<br/>
        pixel perfect design.i also make website more & more interactive with<br/>
        makes your website accessible to all users, regardless of their device.
        </p><br/>
        </div>
        <button className='bg-blue-700 hover:bg-blue-900 text-white 
  font-bold py-2 px-4 m-9 w-900 rounded-full flex' id="btn" onClick={btn}>Lets talk</button>
       </div>
      </div>
    );
  }
  

  export default About;