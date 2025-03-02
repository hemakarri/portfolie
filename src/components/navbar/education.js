import "./education.css";
import React from 'react';
import ReactDOM from 'react-dom'; 
import { Document, Page, pdfjs } from 'react-pdf';
// import { Document, Page, pdfjs, pdf as pdfFunction } from 'react-pdf';
// import { Image } from 'react';
// import { saveAs } from 'file-saver';
import PDFDownloadButton from './PDFDownloadButton';
import react,{useEffect,useState} from 'react'
// import profile from "../images/profile.jpeg"
// import profile from './images/profile1.JPG';  // Your profile image path



// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Education() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size and update isMobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [content, setContent] = useState(null);
  // const handleDownload = async () => {
  //   const pdfBlob = await documentToBlob();
  //   saveAs(pdfBlob, 'example.pdf');

  // };

//   const documentToBlob = async () => {
//     const pdfDocument = (
//       <Document>
//         <Page>
//           <div>
//             <h1>Hello, PDF!</h1>
//             <Image src={profile} />
           
//           </div>
//         </Page>
//       </Document>
//     );

// // Create a new DOM element to render the content
// const container = document.createElement('div');
// document.body.appendChild(container);

// // Render the content to the container
// ReactDOM.render(content, container);

// // Use react-pdf's pdf() function to convert the rendered content to a blob
// const blob = await pdfjs.pdf(content).toBlob();

// // Clean up by removing the rendered content and container
// ReactDOM.unmountComponentAtNode(container);
// document.body.removeChild(container);

// return blob;



//     // const blob = await pdfjs.pdf(pdfDocument).toBlob();
//     // return blob;
//   };
  



  
    return (
      <div className="App">

{/* ------------------------------------------------------------------- */}

<div>

      <div style={{ width: '300px', display:'none'}}>
        {/* <Document>
          <Page>
            <div>
              <h1>Hello, PDF!</h1>
              <Image src={profile} />
            </div>
          </Page>
        </Document> */}
      </div>
    </div>

   
   <PDFDownloadButton />

<div className="main-box">

        <main className="main">
          <section className="edu col mt-8">
          <div className={`edh bg-blue-500 text-white p-4 w-1/2 ${isMobile ? 'ml-16' : 'ml-48'}`}>
      <header className="text-2xl font-cursive">EDUCATION</header>
    </div>
     
{/*        
       <div className="contents">
       </div> */}
 
       <div className="box rounded-lg border border-gray-200/80 bg-white p-6 flex flex-col justify-center items-center animate-fade-in transition-transform hover:scale-105">
        <h4>2003-2013</h4>
       <h3 className="text-xl font-semibold">High School Degree</h3>
       <p className="text-gray-600">my secondary education is complted in vizag in srisai vidya nikethan 
        i completed my 10th class with the 92% in distinct. i learned so many small things in 
        that period
       </p>
       </div>
       <div className="box rounded-lg border border-gray-200/80 bg-white p-6 flex flex-col justify-center items-center animate-fade-in transition-transform hover:scale-105">
        <h4>2013-2016</h4>
       <h3 className="text-xl font-semibold">Diploma Degree</h3>
       <p className="text-gray-600">my Diploma degree is completed  in behara educational institute in time period 
       of 2013 to 2019 under electrical and electronics engineering with 85%. i gained a lot techinical knowledge in this period

       </p>
       </div>
       <div className="box rounded-lg border border-gray-200/80 bg-white p-6 flex flex-col justify-center items-center animate-fade-in transition-transform hover:scale-105">
        <h4>2016-2019</h4>
       <h3 className="text-xl font-semibold" >bachelors Degree</h3>
       <p className="text-gray-600">I completed my Bachelor's degree (BTech) in Electrical and Electronics Engineering at VITAM College 
       in Visakhapatnam (Vizag) with distinction, achieving a remarkable 73%.
       </p>
       </div>
       
       </section>

  {/* experience */}
       <section className="exp row mt-8">
        <div className="edx bg-blue-500 text-white p-4 w-1/2 ml-16">
      <header className="text-2xl font-cursive">EXPERIENCE</header>
    </div>
  <div>
 
       
       <div className="box rounded-lg border border-gray-200/80 bg-white p-6 flex flex-col justify-center items-center animate-fade-in transition-transform hover:scale-105">
        <h4>2019-2021</h4>
       <h3 className="text-xl font-semibold">Lecturer</h3>
       <p className="text-gray-600">My work experience began at this point when I worked as a web coordinator for the college. I utilized basic HTML, CSS, and JavaScript in this role.
        During this period, I embarked on a journey to deepen my knowledge of web technologies.
       </p>
       </div>
       <div className="box rounded-lg border border-gray-200/80 bg-white p-6 flex flex-col justify-center items-center animate-fade-in transition-transform hover:scale-105">
        <h4>2021-2022</h4>
       <h3 className="text-xl font-semibold">fullstackdeveloper Internship</h3>
       <p className="text-gray-600">As a MERN Stack Developer Intern, I had the opportunity to immerse 
       myself in a dynamic and fast-paced environment where I honed my skills in building modern web applications.
       
       </p>
       </div>
       <div className="box rounded-lg border border-gray-200/80 bg-white p-6 flex flex-col justify-center items-center animate-fade-in transition-transform hover:scale-105">
        <h4>2022-2023</h4>
       <h3 className="text-xl font-semibold">S.D.E at iconcept software engineer</h3>
       <p className="text-gray-600">In my current role at iConcept Software Services, I serve as a Full Stack Web Developer, 
       where my responsibilities encompass the maintenance of websites and databases. with some windows services
       
       </p>
       </div>
       
      </div>
       </section>
       </main>
      </div>
      </div>
    );
  }
  
  export default Education;