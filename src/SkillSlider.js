import React, { useState } from 'react'

import { useQueryParam } from './hooks/queryParam'

import './style/SkillSlider.css'
import bearImage from '../static/bear.svg'
import thiefImage from '../static/thief.svg'

const MAX_SKILL = 6
const START_SKILL = 3

const SkillSlider = () => {
  // skill value is a measure of bear-ness
  const [skillValue, setSkillValue] = useQueryParam('sk', START_SKILL)

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
            active={Number(skillValue) === i}
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
      {position === MAX_SKILL && <BearImage />}
      {position === 0 && <ThiefImage />}
    </button>
    <h3 className='skill-slider-box-label criminal'>{MAX_SKILL - position}</h3>
  </div>
}

const BearImage = () => <img className='bear-image' src={bearImage}></img>
const ThiefImage = () => <img className='thief-image' src={thiefImage}></img>

export default SkillSlider