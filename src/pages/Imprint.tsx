import "./Imprint.scss";

// xxx hier bearbeite mich mal 
//Name, Anschrift, Rechtsform und Kontaktdaten 

function Imprint() {
  return (
    <div className="imprint mx-6 my-6">
      <h2 className="title is-2 ">Imprint</h2>
      <div className="content">

        <h1 className="subtitle is-4 mb-2">
        Adress
        </h1>

        <h1 className="is-size-6">    
        email / adress
        <br />
        </h1>

        <h1 className="subtitle is-4 mb-2 my-4">
        Contact dates:
        </h1>

        <h1 className="is-size-6">
        Flaig_1994@pm.me
        <br/>
        +00 123456789
        </h1>
        



      </div>
    </div>
  );
}

export default Imprint;
