import { useState } from "react";
import "./LitImage.scss"
import { useEffect } from "react";

//Wiederverwendbare SkillBar
type LitImageProps = {
   alt: string,
   src: string,
   placeholder?: string;
}
function LitImage(props: LitImageProps) {

   // Wird immer durchgeführt wenn sich ein prop verändert 
   useEffect(() => {

      setLoaded(false)
   }, [props.src]);

   const [loaded, setLoaded] = useState(false)


   // usestate gibt 2 werte: Boolean, Setter
   // state = Normale variable die Reaktiv gekennzeichnet wird. React weiß wann sie sich ändert (sozusagen besitzt die var ein Event-Listener)

   const onLoad = ()=> {
   console.log("buwi")
      setLoaded(true)
   } 

   return (



      // Hier wird ein Bild gerendert.
      // classname ist dynamisch & ....
      <div className="lit-image">
         <div className={loaded ? 'lit-placeholder loaded' : 'lit-placeholder'}>

            <img src={props.src} alt={props.alt}
               onLoad= {onLoad}
            />

            {/* // onError="${() => this._onImgError()}" */}

         </div>
      </div>
   )
}


export default LitImage