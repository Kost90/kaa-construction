import React from 'react';
import FormContact from '../Contactusform/Contactusform';
import {container} from './contactus.module.css'

function Contactus() {
  return (
    <div className={container}>
        <h1>Lets build something together:</h1>
        <FormContact/>
    </div>
  )
}

export default Contactus