import React from 'react'

import './style/IntroductionBox.css'

const IntroductionBox = () => {
  return <div className='introduction-box bear'>
      <p><a href='https://imgur.com/gallery/Zpg4G'>Honey-Heist</a> is a simple roleplaying game by Grant H. <br />
      As part of it, you will undertake the greatest heist the world has ever seen. <br /></p>
      <i>Two things:</i> <br />
      <ul style={{marginLeft: '60px'}}>
        <li>You have a complex plan that requires precise timing</li>
        <li>You are a <b>GODDAMN BEAR</b></li>
      </ul>
  </div>
}

export default IntroductionBox