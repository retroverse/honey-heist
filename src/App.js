import React from 'react'

import SkillSlider from './SkillSlider'

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

const App = () => {
  return <div className='app' style={appStyle}>
    <h1 style={headerStyle}> Honey Heist </h1>
    <SkillSlider />
  </div>
}

export default App