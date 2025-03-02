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
       <h5><span className='p-4 italic text-justify'>Frontend developer</span></h5>
       <div className="mx-9 bg-blue-200 w-47">
       <p className='mx-9 p-5 italic text-center'>
       Hi, I'm Karri Hema Prasad, a passionate Frontend Developer with over 3 years of professional experience in crafting beautiful, responsive web applications. I specialize in React.js, and have a strong foundation in JavaScript and UI development. Throughout my career, I’ve been fortunate to work on various exciting projects, including a fashion website, PRNews, and enterprise-level banking applications.<br/>
       My expertise lies in translating design concepts into functional, user-friendly interfaces, with a keen eye for detail. I also have experience working with ReactJS libraries like Redux Toolkit and Redux Saga to manage application state and handle side effects efficiently. My approach to coding emphasizes maintainability, reusability, and clean, high-quality code.

<br/>
I enjoy exploring new technologies and have some experience with AWS Lambda for serverless functions. Alongside my frontend skills, I’m proficient in Git for version control and familiar with unit testing using React Testing Library to ensure high-quality applications.

When I'm not coding, you can find me exploring new opportunities for self-improvement and working on side projects to keep up with the ever-evolving web development landscape.

Feel free to browse through my portfolio, and let’s connect!


        </p><br/>
        </div>
        <button className='bg-blue-700 hover:bg-blue-900 text-white 
  font-bold py-2 px-4 m-9 w-900 rounded-full flex' id="btn" onClick={btn}>Lets talk</button>
       </div>
      </div>
    );
  }
  

  export default About;