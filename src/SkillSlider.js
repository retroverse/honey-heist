import React, { useState } from 'react'


const DARKER_YELLOW = '#c7b216'
const BEAR_TEXT = '#92491d'
const CRIMINAL_TEXT = '#464646'
const DARK_YELLOW = 'rgb(255, 236, 96)'
const LIGHT_YELLOW = '#f9f4cb'
const MAX_SKILL = 6

const sliderStyle = {
  display: 'grid',
  gridTemplateRows: '1fr 2fr 1fr',
  color: DARKER_YELLOW,
  alignItems: 'center',
  justifyItems: 'center',
  backgroundColor: '#ffffea',
  borderRadius: '5px',
  boxShadow: '3px 2px 7px #be7c0bc9'
}
const containerStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(${MAX_SKILL + 1}, 1fr)`,
  height: '100%',
  width: '95%'
}
const boxStyle = {
  display: 'grid',
  gridTemplateRows: '1fr 3fr 1fr',
  textAlign: 'center',
  alignItems: 'center',
  margin: '3px'
}
const boxCenterStyle = {
  height: '80px',
  borderRadius: '8px',
  border: 'none',
  outline: 'none',
  boxShadow: 'rgba(109, 49, 5, 0.37) 0px -3px 0px 0px inset'
}

const SkillSlider = () => {
  // skill value is a measure of bear-ness
  const [skillValue, setSkillValue] = useState(3)

  return <div className='skill-slider' style={sliderStyle}>
    <h2 style={{justifySelf: 'start', marginLeft: '30px', color: BEAR_TEXT}}> BEAR </h2>
    <div className='skill-slider-container' style={containerStyle}>
      {
        Array.from({length: MAX_SKILL + 1}).map((x, i) =>
          <SkillSliderBox
            key={i}
            position={i}
            active={skillValue === i}
            onSelect={pos => setSkillValue(pos)}
          />
        )
      }
    </div>
    <h2 style={{justifySelf: 'end', marginRight: '30px', color: CRIMINAL_TEXT}}> CRIMINAL </h2>
  </div>
}

const SkillSliderBox = ({position, active, onSelect}) => {
  return <div style={boxStyle}>
    <h3 style={{color: BEAR_TEXT}}>{position}</h3>
    <button onClick={() => onSelect(position)} style={{...boxCenterStyle, background: active ? DARK_YELLOW : LIGHT_YELLOW}}>

    </button>
    <h3 style={{color: CRIMINAL_TEXT}}>{MAX_SKILL - position}</h3>
  </div>
}

export default SkillSlider