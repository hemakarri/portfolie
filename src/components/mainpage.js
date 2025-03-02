import { useNavigate } from 'react-router-dom';
import './mainpage.css';
import profileImage from './images/profile1.JPG';

function Mainpage() {
  const navigate = useNavigate();
  const buttonText = window.innerWidth <= 768 ? 'Explore My World 🌐' : 'Click to Explore 🚀';

  const showHand = () => {
    const hand = document.querySelector('.hand');
    hand.style.display = 'block'; // Show Hand
    setTimeout(() => {
      navigate('/data'); // Use React Router's navigate for redirection
    }, 1800); // Same Duration as Animation
  };

  return (
    <div className="main">
      {/* Hand Emoji */}
      <div className="hand">🖐️</div>

      {/* Profile Image */}
      <img src={profileImage} alt="Profile" className="profile-image" />

      <div className="intro">
        <h1 className="name">Hi, I'm <span className="highlight">Karri Hema Prasad</span></h1>
        <h2 className="role">Frontend Developer</h2>
      </div>

      <button className="btn" onClick={showHand}>
        {buttonText}
      </button>
      <p className="para">
        Welcome to my portfolio! <br />
        With 3 years of experience in frontend development, I am passionate about creating beautiful and functional websites.
        <br />
        Click to explore more about me!
      </p>
    </div>
  );
}

export default Mainpage;
