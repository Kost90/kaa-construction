import React from 'react';
import FormContact from './contactusform';
import {container} from './styles/contactus.module.css'

function Contactus() {
  return (
    <div className={container}>
        <h1>Lets build something together:</h1>
        <FormContact/>
    </div>
  )
}

export default Contactus