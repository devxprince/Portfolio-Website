import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQELTVZIyT7STA/profile-displayphoto-scale_400_400/B4DZqXUqHMJEAg-/0/1763475371151?e=1767225600&v=beta&t=vPW51KZlD6TrUDqkkgdGROeDnVnQ7U0piimV5gsV_ks" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/devxprince" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prince-kumar-229550270/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Prince K. Sharma</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/devxprince" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prince-kumar-229550270/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
