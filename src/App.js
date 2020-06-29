import React, { useState } from 'react'

import SkillSlider from './SkillSlider'
import CharacterBoxes from './CharacterBoxes'
import IntroductionBox from './IntroductionBox'
import NotesBox from './NotesBox'

import './style/App.css'

const App = () => {
  return <div className='app'>
    <div className='app-contents'>
      <h1 className='app-header'> <span className='honey'>Honey</span> <span className='heist'>Heist</span></h1>
      <div className='boxes'>
        <IntroductionBox />
        <CharacterBoxes />
        <SkillSlider />
        <NotesBox />
      </div>
    </div>
  </div>
}

export default App