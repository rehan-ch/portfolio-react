import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            {/* <div className="project-links">
              <a href="" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div> */}
            </header>
            <div className="body">
              <h3>Bookafy</h3>
              <p>Bookafy is cloud based a appointment scheduling software that automates scheduling of meetings.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Ruby on Rails</li>
                <li>Postgress</li>
                <li>Js</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            {/* <div className="project-links">
              <a href="" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div> */}
            </header>
            <div className="body">
              <h3>Aurora Enterprises</h3>
              <p>Aurora is a Social Enterprise that was designed to use technology to improve and save lives through a wide range of life changing initiatives.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Ruby on Rails</li>
                <li>Postgress</li>
                <li>Js</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            {/* <div className="project-links">
              <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div> */}
            </header>
            <div className="body">
              <h3>Lahanur</h3>
              <p>A web application E-Commerece Plateform to sell Products to all over the world with different payment methods.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Ruby on Rails</li>
                <li>SQL</li>
                <li>Js</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            {/* <div className="project-links">
              <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div> */}
            </header>
            <div className="body">
              <h3>EE-JUST</h3>
              <p>A Social Media Plateform with Job Posting and hunting and sharing knowledge if form of posts.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Ruby on Rails</li>
                <li>SQL</li>
                <li>Js</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}