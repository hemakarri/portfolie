import {Link} from 'react-router-dom'
import react,{useEffect,useState} from 'react'
import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./data.css"
import axios from 'axios';
import Header from './header';
import agecal from "./images/agecal.png";
import bookstore from "./images/bookstore.png";
import bookstoresub from "./images/booksub.png";
import project1 from "./images/project1.png";
import pmc from "./images/pmc.png";
import calci from "./images/calci.png";
import laundry from "./images/laundry.png";

import imgsearch from "./images/imgsearch.png";
import { CiCircleList } from "react-icons/ci";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


function Data() {
    const[data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/getdata")
    .then(res=>setData(res.data.user))
  },[])
 


const words = ["JavaScript", "SQL", "nodejs", "Mongo-db", "express-js", "c#","react" ,"postman"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(rotateWords, 1000); // Rotate every 2 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

//   const rotateWords = () => {
//     // Increment the current word index
//     let newIndex = currentWordIndex + 1;
  
//     // If it goes beyond the last word, wrap around to the first word
//     if (newIndex >= words.length) {
//       newIndex = 0;
//     }
  
//     // Set the new index as the current word index
//     setCurrentWordIndex(newIndex);
//   };

const rotateWords = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     var newIndex = (currentWordIndex + 1) % words.length;
//   setCurrentWordIndex(newIndex);
 
  };

  const currentWord = words[currentWordIndex];

   const {text} = useTypewriter({
    words: ["javascript", "sql", "python", "mongo"],
    loop: true, 
    deleteSpeed: 50,
   })


  return (
    <div className="App">
        <Header/>

  <div className='bg-dark-purple-100'>
    <div className='flex justify-between'>
    
  <Link to="/about"><button className='bg-blue-700 hover:bg-blue-900 text-white 
  font-bold py-2 px-4 w-900 rounded-full flex mb-4'><CiCircleList className='mt-1'/>about</button></Link>
  <Link to="/skills"><button className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full flex mb-4'><CiCircleList className='mt-1'/>skills</button></Link>
  <Link to="/education"> <button className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full flex mb-4'><CiCircleList className='mt-1'/>education</button></Link>  
  <Link to="/contact"> <button className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full flex mb-4'><CiCircleList className='mt-1'/>contact</button></Link>  
  </div>
  </div>


<div className='middle-body'>

<h1 className='italic text-center'>Hello my name is chandu</h1>

<h1>
  I am a fullstack Developer worked on{" "}
  <span>
    {currentWord.split("").map((letter, index) => (
      <span
        key={index}
        style={{
          fontWeight: 'bold',
          color: 'green',
          display: "inline-block",
          animation: `typing 1s steps(${letter.length})`
        }}
      >
        {letter}
      </span>
    ))}
  </span>
</h1> 

{/* <h1>
  I am a {text}
  <Cursor />
</h1> */}
           <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>These are my projects</h1>
       {/* <div className='proj flex justify-around'>     */}
       <div className='proj'>    
       

       <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-500 hover:scale-105">
    <a href="#">
    <img class="rounded-t-lg" src={laundry} alt="Age Calculator Icon" />
    </a>
    <div class="p-5">
        <a href="https://6506b3ee91bdff174ecc528f--sparkling-mandazi-61fae9.netlify.app/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Laundry service</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Laundry service is built with the react and nodejs with the mongo db. we can book laundry selecting few service mangement with login and logout service based on json token authentication</p>
        <a href="https://6506b3ee91bdff174ecc528f--sparkling-mandazi-61fae9.netlify.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>




<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-500 hover:scale-105">
    <a href="#">
    <img class="rounded-t-lg" src={project1} alt="Age Calculator Icon" />
    </a>
    <div class="p-5">
        <a href="https://contact-manager-app-pigx.onrender.com/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact-Manager-MERN Stack</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This project based react and nodejs with mongodb database. we can upload csv file using import button. we can store those data with diffrent contacts. here we can import and export csv files easily </p>
        <a href="https://contact-manager-app-pigx.onrender.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-500 hover:scale-105">
    <a href="#">
    <img class="rounded-t-lg" src={pmc} alt="Age Calculator Icon" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Iconcept P.M.C Using Dotnet</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This project is based on mvc frame work with the sql database.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="https://pmc.ai/biostadt/live/portal" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


</div>



           <Carousel className='carousel'>
    <div className="cimage">
        <a href="http://youtube.com">
            <img src={agecal} alt="Age Calculator Icon" />
        </a>
    </div>
    <div className="cimage">
    <img src={bookstore}/>
    </div>
    <div className="cimage">
    <img src={bookstoresub}/>
    </div>
    <div className="cimage">
    <img src={calci}/>
    </div>
    <div className="cimage">
    <img src={imgsearch}/>
    </div>
    <div className="cimage">
    <img src={bookstoresub}/>
    </div>
    </Carousel>
     {
        data.map((item)=>{
            return(
                <>
            <p>{item.link}</p>
            <p>{item.linkgit}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
                </>
            )
        })
          


     }
     </div>
    </div>
  );
}

export default Data;