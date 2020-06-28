import React, { useState } from 'react'

import './style/SkillSlider.css'

const MAX_SKILL = 6
const START_SKILL = 3

const SkillSlider = () => {
  // skill value is a measure of bear-ness
  const [skillValue, setSkillValue] = useState(START_SKILL)

  return <div className='skill-slider'>
    <div className='skill-slider-tab bear'>
      <h2 className='skill-slider-tab-label bear'> BEAR </h2>
    </div>
    <div className='skill-slider-container' style={{gridTemplateColumns: `repeat(${MAX_SKILL + 1}, 1fr)`}}>
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
    <div className='skill-slider-tab criminal'>
      <h2 className='skill-slider-tab-label criminal'> CRIMINAL </h2>
    </div>
  </div>
}

const SkillSliderBox = ({position, active, onSelect}) => {
  return <div className='skill-slider-box'>
    <h3 className={`skill-slider-box-label bear ${active && 'active'}`}>{position}</h3>
    <button className={`skill-slider-box-button ${active && 'active'}`} onClick={() => onSelect(position)}>

    </button>
    <h3 className='skill-slider-box-label criminal'>{MAX_SKILL - position}</h3>
  </div>
}

export default SkillSlider