import React from 'react'
import './Covidcard.css';

const Covidcard = ({name, num}) => {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5' style={{width: '250px', height: '250px' }}>
      <h2 style={{textAlign: 'center'}}>{name}</h2>
      <h3 style={{textAlign: 'center', fontSize: '30px'}}>{num}</h3>
    </div>
  )
}

export default Covidcard