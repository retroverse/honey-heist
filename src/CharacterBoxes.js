import React, { useState } from 'react'


import { useQueryParam } from './hooks/queryParam'
import './style/CharacterBoxes.css'

const descriptors = [
  'rookie',
  'washed-up',
  'retired',
  'unhinged',
  'slick',
  'incompetent'
]

const species = [
  'grizzly bear',
  'polar bear',
  'panda',
  'black bear',
  'sun bear',
  'honey badger'
]

const roles = [
  'muscle',
  'brains',
  'driver',
  'hacker',
  'thief',
  'face'
]

const skills = {
  'grizzly bear': 'Terrify',
  'polar bear': 'Swim',
  'panda': 'Eat Bamboo-Like',
  'black bear': 'Climb',
  'sun bear': 'Sense Honey',
  'honey badger': 'Carnage',
}

const handleValueChange = (cb) => ({ target: { value }}) => cb(value)

const CharacterBoxes = ({}) => {
  const [nameValue, setNameValue] = useQueryParam('n', '')
  const [descriptorValue, setDescriptorValue] = useQueryParam('d', descriptors[0])
  const [speciesValue, setSpeciesValue] = useQueryParam('s', species[0])
  const [roleValue, setRoleValue] = useQueryParam('r', roles[0])

  return <>
    <div className='character-box bear'>
      Hi!
      I am <input type='text' value={nameValue} onChange={handleValueChange(setNameValue)} placeholder='name' className='character-box-field'/>. <br />
      I am a{(descriptorValue[0] === 'u' || descriptorValue[0] == 'i') && 'n'} <FieldSelect value={descriptorValue} onChange={handleValueChange(setDescriptorValue)} options={descriptors}/><span className='gap'/>
      <FieldSelect value={speciesValue} onChange={handleValueChange(setSpeciesValue)} options={species}/>, <br />
      the <FieldSelect value={roleValue} onChange={handleValueChange(setRoleValue)} options={roles}/> of the operation.
    </div>
    <div className='character-box skill-box bear'>
      <p>As a <span className='species-label'>{speciesValue}</span> you can use</p>
      <div className='skill-box-label'>
        <h3> { skills[speciesValue] } </h3>
      </div>
    </div>
  </>
}

const FieldSelect = ({options, value, onChange}) => (
  <select value={value} onChange={onChange} className='character-box-field'>
    { options.map(o => <option key={o}>{o}</option>) }
  </select>
)

export default CharacterBoxes