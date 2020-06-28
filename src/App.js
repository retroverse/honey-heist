import React from 'react'

import SkillSlider from './SkillSlider'
import CharacterBox from './CharacterBox'

const appStyle = {
  width: '95%',
  padding: '30px',
  borderRadius: '5px',
  margin: 'auto',
  marginTop: '20px',
  background: '#fff077',
  boxShadow: 'rgba(146, 146, 146, 0.68) 3px 3px 6px'
}

const headerStyle = {
  marginBottom: '25px',
  color: 'rgb(153, 86, 0)',
  fontSize: '60px'
}

const honeyStyle = {
  fontFamily: 'Indie Flower'
}

const heistStyle = {
  fontFamily: 'Bebas Nue'
}

const App = () => {
  return <div className='app' style={appStyle}>
    <h1 style={headerStyle}> <span style={honeyStyle}>Honey</span> <span style={heistStyle}>Heist</span> </h1>
    <CharacterBox />
    <SkillSlider />
  </div>
}

export default App