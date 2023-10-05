import "./Home.scss";
import SkillBar from '../components/SkillBar/SkillBar'
import Contact from '../components/Contact/Contact'
import { Link } from "react-router-dom";


function Home() {
  const onContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  // HomePictures
  return (
    <div className="Home ">
      
      <section className="home-introduction has-background-white-bis pt-6">
        <div className="container px-4">
{/* columns*/}
          <div className="columns my-0 ">
            <div className="column is-6 py-0">
              <div className="mt-5 home-lead has-text-grey-lighter"> Developer and Artist 
              </div>
              <h1> 
                My Name is Jenny! <br/>
                Nice to meet you!
              </h1>
{/* Button */}
              <button
                className="button is-medium is-primary is-outlined mr-5 mt-5"
                onClick={onContact}>
                Contact me
              </button>
              
              <a
                href="https://github.com/Flat-Cat/"
                target="_blank"
                className="button is-medium is-link is-outlined mt-5">
                GitHub
              </a>
            </div>
            <div className="column is-6 py-0 pt-4">
            <img className="homeimg is-block" id="homeimg" src="/img/home/homepic.png" title="homeimg" />  
            </div>
{/* bild */}
          
                
{/* Skill-bar*/}


          </div>
        </div>
      </section>
      <section className="home-skills">
        <div className="container px-4 py-6">
          <h2>Skills</h2>
          <SkillBar title="HTML & CSS " value={41}></SkillBar>
          <SkillBar title="Javascript & Typescript " value={39}></SkillBar>
          <SkillBar title="React" value={41}></SkillBar>
          <SkillBar title="Java Spring Boot" value={24}></SkillBar>
          <div>Wanna know more what else I can do?</div>
{/* Resume Button */}
          <Link className="button is-medium is-white mr-5 mt-5 is-link is-outlined  " to="/resume">Resume</Link>
          </div>
{/*x Hier farbe ändern */}
        
      </section>
{/* contact me */}
      <section className="home-contact has-background-white-bis">
        <div className="container px-4 py-6 ">
          <Contact></Contact>
        </div>
      </section>
    </div>
  );
}
export default Home;
