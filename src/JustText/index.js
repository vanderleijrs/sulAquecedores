import React from 'react'
import texts from './texts.json'
import './Justtext.css'
function justText(){
   return(
        <div className="espacamento">
            <h2>{texts.data.product}</h2>
            <hr/>
            <p>{texts.data.frase1}</p>
            <p>{texts.data.frase2}</p>
        </div>
   ) 
}
export default justText