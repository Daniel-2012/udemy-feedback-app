import React from 'react'

import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
  <Card>
    <div className='about'>
        <h1>About this project</h1>
        <p>This React APP leaves feedback about a product or service</p>
        <p>Version: 1.0.0</p>

        <p>
            <Link to='/'>Back To Home</Link>
        </p>
    </div>
  </Card>
  )
  
}

export default AboutPage
