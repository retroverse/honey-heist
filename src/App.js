import React from 'react'

import SkillSlider from './SkillSlider'
import CharacterBox from './CharacterBox'

import './style/App.css'

const App = () => {
  return <div className='app'>
    <h1 className='app-header'> <span className='honey'>Honey</span> <span className='heist'>Heist</span> </h1>
    <CharacterBox />
    <SkillSlider />
  </div>
}

export default App