import React, { useState } from 'react'

import SkillSlider from './SkillSlider'
import CharacterBoxes from './CharacterBoxes'

import './style/App.css'

const App = () => {
  return <div className='app'>
    <h1 className='app-header'> <span className='honey'>Honey</span> <span className='heist'>Heist</span> </h1>
    <div className='boxes'>
      <CharacterBoxes />
      <SkillSlider />
    </div>
  </div>
}

export default App