import { Link } from 'react-router-dom';
import './header.css';
import profilePic from './images/profile1.JPG';  // Your profile image path
import techStackImg from './images/tools.png'; // Your tech stack image path

function Header() {
  return (
    <div className="custom-header">
      <div className="custom-header-container">
        {/* Profile Section */}
        <div className="profile-section">
          <img className="profile-pic" src={profilePic} alt="Profile" />
          <h4 className="user-name">Karri Hemaprasad</h4>
          <p className="user-role">Frontend Developer</p>
        </div>

        {/* Tech Stack Image */}
        <div className="tech-stack-section">
          <img className="tech-stack-img" src={techStackImg} alt="Tech Stack" />
        </div>

        {/* Call-to-Action Button */}
        <div className="cta-section">
          {/* <Link to="/submit">
            <button className="cta-button">
              Add Project
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
