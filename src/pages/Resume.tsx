import "./Resume.scss";
import SkillBar from "../components/SkillBar/SkillBar";

function Resume() {
  // Skillbars
  return (
    <div className="resume">
      <section className="py-6">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
            </div>
{/*___Bild___________________________________________________________________________________*/}
            <div className="column is-9 is-flex is-justify-content-right">
              <img src="../private/other/application_pic.png" width="260"></img>
            </div>
          </div>
{/*___Training 1___________________________________________________________________________________ */}
          <h2 className="title pb-5">Trainings</h2>
          <div className="columns my-0">

            <div className="column is-3">
              <h3 className="subtitle is-4">2020 - 2023</h3>
            </div>

            <div className="column is-9">
              <div className="row">
                <div className="column">
                  Umschulung zum Fachinformatikerin in Anwendungsentwicklung
                  <p className="has-text-grey">Comcave, Ludwigshafen</p>
                </div>
              </div>
            </div>
          </div>
          {/* Training 2 */}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2009 - 2013</h3>
            </div>

            <div className="column is-9">
              <div className="row">
                <div className="column">
                  Staatliche Anerkennung zur Kinderpflegerin
                  Erwerb der Mittleren Reife
                  <p className="has-text-grey">Zinzendorfschule Königsfeld</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
{/* _Berufliche_station_01_________________________________________________*/}
          <h2 className="title pb-5">Vocational stations</h2>
          <div className="columns my-0">

            <div className="column is-3">
              <h3 className="subtitle is-4">2023 - 2023</h3>
            </div>

            <div className="column is-9">
              <div className="row">
              <div className="column">
                  Vaspp, Wiesloch
                  <p className="has-text-grey">3-Monatiges Praktikum</p>
                </div>
              </div>
            </div>
          </div>
{/* _Berufliche_station_02_________________________________________________*/}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2022 - 2023</h3>
            </div>

            <div className="column is-9">
              <div className="row">
                <div className="column">
                  Lambdaforge, Mannheim 
                  <p className="has-text-grey">7-Monatiges Praktikum</p>
                </div>
              </div>
            </div>
          </div>
{/* _Berufliche_station_03_________________________________________________*/}
         <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2019 - 2020</h3>
            </div>

            <div className="column is-9">
              <div className="row">
                <div className="column">
                  Dean & David, Mannheim
                  <p className="has-text-grey">Servicekraft</p>
                </div>
              </div>
            </div>
          </div>
{/* _Berufliche_station_04_________________________________________________*/}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2018 - 2019</h3>
            </div>

            <div className="column is-9">
              <div className="row">
                <div className="column">
                  DHL Express, Mannheim 
                  <p className="has-text-grey">Zollabfertigung</p>
                </div>
              </div>
            </div>
          </div>
{/* _Berufliche_station_05_________________________________________________*/}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2018 - 2018</h3>
            </div>

            <div className="column is-9">
              <div className="row">
                <div className="column">
                  Cinemaxx Kino, Mannheim
                  <p className="has-text-grey">Servicekraft</p>
                </div>
              </div>
            </div>
          </div>
{/* _Berufliche_station_06_________________________________________________*/}
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">2013 - 2018</h3>
            </div>

            <div className="column is-9">
              <div className="row">
                <div className="column">
                  Evangelische Kirche, Mannheim 
                  <p className="has-text-grey">Kinderpflegerin</p>
                  <p className="has-text-grey">Mehrere Fortbildungen zu diesem Bereich vorhanden</p>
                </div>
              </div>
            </div>
          </div>
          {/* _Language_________________________________________________*/}
          <h2 className="title pb-5">Languages</h2>
          <div className="columns my-0">

            <div className="column is-3">
              <h3 className="subtitle is-4">German</h3>
            </div>

            <div className="column is-9">
              <div className="row">
              <div className="column">
                  <p className="has-text-grey">Muttersprache</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="columns my-0">
            <div className="column is-3 ">
              <h3 className="subtitle is-4">English</h3>
            </div>

            <div className="column is-9">
              <div className="row">
                <div className="column">

                  <p className="has-text-grey">Safe handling</p>
                </div>
              </div>
            </div>
          </div>
{/* _Relevante Erfahrungen_________________________________________________*/}
                    <h2 className="title pb-5">Relevant experience</h2>
          <div className="columns my-0">

            <div className="column is-3">
            
            </div>

            <div className="column is-9">
              <div className="row">
              <div className="column">
                - Start-up internships with the following tech stack: Gitlab, Swagger, Datahike, Repl, Re-Frame, npm, Clojure, and ClojuresScript. Agile methodology was used.
              </div>
              <div className="column">
                - Retraining as an application development specialis
              </div>
              <div className="column">
                - Extensive computer skills including Visual Studio Code, MS Word, MS PowerPoint, MySQL Workbench, Gimp.
              </div>
              <div className="column">
                - HTML, CSS & JavaScript workshop, Hackschool, Mafinex Technology Center Mannheim, Internship.
              </div>
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