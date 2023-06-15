import "./Home.scss";
import SkillBar from '../components/SkillBar/SkillBar'
import Contact from '../components/Contact/Contact'
import Resume from "./Resume";
import { Link } from "react-router-dom";


function Home() {
  const onContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  // HomePictures
  return (
    <div className="Home ">
      
      <section className="home-introduction has-background-white-ter pt-6">
        <div className="container ">
{/* columns*/}
          <div className="columns my-0 ">
            <div className="column is-6 ">
              <div className="mt-5 home-lead "> Developer and Artist 
              </div>
              <h1> 
                My Name is Jenny! <br/>
                Nice to meet you!
              </h1>
{/* Button */}
              <button
                className="button is-medium is-primary mr-5"
                onClick={onContact}>
                Contact me
              </button>
              
              <a
                href="https://github.com/Flat-Cat/"
                target="_blank"
                className="button is-medium is-link">
                GitHub
              </a>
            </div>
{/* bild */}
            <img className="homeimg" id="homeimg" src="/img/home/homepic.png" title="homeimg" />  
                
{/* Skill-bar*/}


          </div>
        </div>
      </section>
      <section className="home-skills">
        <div className="container">
          <h2>Skills</h2>
          <SkillBar title="HTML & CSS " value={43}></SkillBar>
          <SkillBar title="Javascript & Typescript " value={35}></SkillBar>
          <SkillBar title="React" value={39}></SkillBar>
          <SkillBar title="Java Spring Boot" value={100}></SkillBar>
          <div>Wanna know more what else I can do?</div>
{/* Resume Button */}
          <Link className="button is-medium is-white mr-5" to="/resume">Resume</Link>
          </div>
{/*x Hier farbe ändern */}
        
      </section>
{/* contact me */}
      <section className="home-contact">
        <div className="container">
          <Contact></Contact>
        </div>
      </section>
    </div>
  );
}
export default Home;
