import "./Resume.scss";
import SkillBar from "../components/SkillBar/SkillBar";

function Resume() {
  // Skillbars
  return (
    <div className="resume ">
      <section className="py-6 ">
        <div className="container px-4">
          <div className="columns ">
            <div className="column is-3 ">
            </div>
            {/*___Bild___________________________________________________________________________________*/}
            <div className="column is-9 is-flex is-justify-content-right">
            <img src="img/other/application_pic.png" width="260"></img>
            </div>
          </div>
          {/*___Training 1___________________________________________________________________________________ */}
          <h2 className="title pb-5 has-background-grey-lighter">Trainings</h2>
          <div className="columns my-0 ">

            <div className="column is-3 ">
              <h3 className="subtitle is-4">2020 - 2023</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                Umschulung zum Fachinformatikerin in Anwendungsentwicklung
                <p className="has-text-grey">Comcave, Ludwigshafen</p>
              </div>
            </div>
          </div>
          {/* Training 2 */}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2009 - 2013</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                Staatliche Anerkennung zur Kinderpflegerin
                Erwerb der Mittleren Reife
                <p className="has-text-grey">Zinzendorfschule Königsfeld</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container px-4">
          {/* _Berufliche_station_01_________________________________________________*/}
          <h2 className="title pb-5 has-background-grey-lighter">Vocational stations</h2>
          <div className="columns my-0">

            <div className="column is-3">
              <h3 className="subtitle is-4">2023 - 2023</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                Vaspp, Wiesloch
                <p className="has-text-grey">3-Monatiges Praktikum</p>
              </div>
            </div>
          </div>
          {/* _Berufliche_station_02_________________________________________________*/}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2022 - 2023</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                Lambdaforge, Mannheim
                <p className="has-text-grey">7-Monatiges Praktikum</p>
              </div>
            </div>
          </div>
          {/* _Berufliche_station_03_________________________________________________*/}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2019 - 2020</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                Dean & David, Mannheim
                <p className="has-text-grey">Servicekraft</p>
              </div>
            </div>
          </div>
          {/* _Berufliche_station_04_________________________________________________*/}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2018 - 2019</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                DHL Express, Mannheim
                <p className="has-text-grey">Zollabfertigung</p>
              </div>
            </div>
          </div>
          {/* _Berufliche_station_05_________________________________________________*/}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2018 - 2018</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                Cinemaxx Kino, Mannheim
                <p className="has-text-grey">Servicekraft</p>
              </div>
            </div>
          </div>
          {/* _Berufliche_station_06_________________________________________________*/}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2013 - 2018</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                Evangelische Kirche, Mannheim
                <p className="has-text-grey">Kinderpflegerin</p>
                <p className="has-text-grey">Mehrere Fortbildungen zu diesem Bereich vorhanden</p>
              </div>
            </div>
          </div>
          {/* _Language_________________________________________________*/}
          <h2 className="title pb-5 has-background-grey-lighter">Languages</h2>
          <div className="columns my-0">

            <div className="column is-3">
              <h3 className="subtitle is-4">German</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                <p className="has-text-grey">Muttersprache</p>
              </div>
            </div>
          </div>

          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">English</h3>
            </div>

            <div className="column is-9">
              <div className="column">
                <p className="has-text-grey">Safe handling</p>
              </div>
            </div>
          </div>
          {/* _Relevante Erfahrungen_________________________________________________*/}
          <h2 className="title pb-5 has-background-grey-lighter">Relevant experience</h2>

          <div className="column is-3">
          </div>

          <div className="content">
            <ul>
              <li>Start-up internships with the following tech stack: Gitlab, Swagger, Datahike, Repl, Re-Frame, npm, Clojure and ClojuresScript. Work was done in agile methodology. </li>
              <li>Retraining IT specialist application development </li>
              <li>Extensive EDP knowledge including Visual Studio Code, MS Word, MS Powerpoint, MYSQL Workbench, Gimp</li>
              <li>HTML, CSS & JavaScript Workshop, Hackschool, Mafinex Technology Center Mannheim, Internship</li>
            </ul>
          </div>
          {/* _Kern-Kompetenzen_________________________________________________*/}
          <h2 className="title pb-5 has-background-grey-lighter">Core competencies</h2>

          <div className="column is-3">
          </div>

          <div className="content">
            <ul>
              <li>Communicative skills through strong interpersonal skills</li>
              <li>Respond constructively to ideas and suggestions from others</li>
              <li>Encourage active team participation and collaboration</li>
              <li>Actively seeks new ways of working to improve productivity</li>
              <li>Able to take criticism and have a strong willingness to learn</li>
            </ul>
          </div>
          {/* _Skill-bar_________________________________________________*/}
          <h2 className="title pb-5 has-background-white-ter">Skills</h2>
          <section className="skills has-background-white-ter">
            <div className="container">
              <h2>Programming Languages</h2>
              <SkillBar title="HTML & CSS " value={43}></SkillBar>
              <SkillBar title="Javascript & Typescript " value={35}></SkillBar>
              <SkillBar title="Java" value={21}></SkillBar>
              <SkillBar title="ClojureScript & Clojure" value={21}></SkillBar>
              <SkillBar title="SQL" value={46}></SkillBar>

              <h2>Other skills</h2>

              <SkillBar title="MariaDB, MySQL" value={40}></SkillBar>
              <SkillBar title="Java Spring boot" value={29}></SkillBar>
              <SkillBar title="Bulma, CMS Strapi" value={23}></SkillBar>
              <SkillBar title="React" value={46}></SkillBar>
              <SkillBar title="Postman, Swagger" value={39}></SkillBar>
              <SkillBar title="Calva & Leiningen" value={15}></SkillBar>
              <SkillBar title="ReFrame & DataHike" value={19}></SkillBar>
              <SkillBar title="Docker" value={13}></SkillBar>

            </div>
          </section>

          <div className="columns">
            <div className="column">
{/* _Softskills_________________________________________________*/}
              <h2 className="title pb-5 has-background-white-ter">Softskills</h2>
              <div className="content ">
                <ul>
                  <li>Solution oriented</li>
                  <li> Enthusiastic</li>
                  <li>Outgoing</li>
                  <li>Humorous</li>
                </ul>
              </div>

            </div>
            <div className="column">
{/* _hobbys_________________________________________________*/}
            <h2 className="title pb-5 has-background-white-ter">Hobbys</h2>
              <div className="content">
                <ul>
                  <li>Reading Books</li>
                  <li>Crocheting</li>
                  <li>Gartening</li>
                  <li>Paining</li>
                </ul>
              </div>
            </div>
          </div>

          {/* __________________________________________________*/}
          <div className="columns">
            <div className="column is-one-third">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Resume;


// Columns = . columns is was anderse wie column
// bulma = grid system.

//.column.is-3

// is-3, is-4 = muss am ende 12 ergeben. 