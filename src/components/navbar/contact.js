import "./contact.css";
import Modal from 'react-modal';
import { init } from 'emailjs-com'
import react,{useEffect,useState} from 'react'
import linkedin from "../images/linkedin.png";
import instagramlo from "../images/instagramlo.jpg";
import twitter from "../images/twitter.jpeg";
import facebook from "../images/facebook.png";
import git from "../images/git.png";



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function Contact() {

  const [modalIsOpen, setIsOpen] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    // mailjs.sendForm('service_s4tfjo6', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };


  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

    return (
      <div className="App">
        <div className="parent">
        <div className="child">

          <div className="details">
          <div className="detail"><label
            className="label">Name:</label><p
            className="name">P.chadra sekhar</p></div>
            <div className="detail"><label className="label">Mobile-No:</label><p  className="name">8074046422</p></div>
            <div className="detail"><label  className="label">Email:</label><p  className="name">pedagadisekhar@gmail.com</p></div>
            <div className="detail"><label  className="label">GitHub:</label><p  className="name">p.chadra sekhar</p></div>
          </div>
           <div className="logos">
           <img className='link' src={linkedin} alt="profile" height='30px' width='45px' />
           <img className='insta' src={instagramlo} alt="profile" height='45px' width='45px'/>
           <img className='imag' src={twitter} alt="profile" height='50px' width='50px'/>
           <img className='imag' src={facebook} alt="profile" height='30px' width='50px'/>
           <img className='imag' src={git} alt="profile" height='30px' width='50px'/>

           </div>
          
           <div>
      <button id='btn-btn' onClick={openModal}>EMAIL ME
      </button>
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <button id='btn-btn' onClick={closeModal}>close</button>
        
        <form>
        <input className="input" type="text" placeholder='Name'  name='title'/>
      <input className="input" type="text" placeholder='Contact-No'  name='title'/>
      <input className="input" type="text" placeholder='Email'  name='title'/>
      <input className="input" type="text" placeholder='Reason'  name='title'/>
      <input  id='btn-btn' type="submit"/>
        </form>
      </Modal>
    </div>
          

        </div>
          
        </div>
        
       
      </div>
    );
  }
  

  export default Contact;