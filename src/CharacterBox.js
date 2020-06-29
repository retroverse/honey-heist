import React, { useState } from 'react'


import { useQueryParam } from './hooks/queryParam'
import './style/CharacterBox.css'

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

const handleValueChange = (cb) => ({ target: { value }}) => cb(value)

const CharacterBox = () => {
  const [nameValue, setNameValue] = useQueryParam('n', '')
  const [descriptorValue, setDescriptorValue] = useQueryParam('d', descriptors[0])
  const [speciesValue, setSpeciesValue] = useQueryParam('s', species[0])
  const [roleValue, setRoleValue] = useQueryParam('r', roles[0])

  return <div className='character-box bear'>
    Hi!
    I am <input type='text' value={nameValue} onChange={handleValueChange(setNameValue)} placeholder='name' className='character-box-field'/>. <br />
    I am a{(descriptorValue[0] === 'u' || descriptorValue[0] == 'i') && 'n'} <FieldSelect value={descriptorValue} onChange={handleValueChange(setDescriptorValue)} options={descriptors}/><span className='gap'/>
    <FieldSelect value={speciesValue} onChange={handleValueChange(setSpeciesValue)} options={species}/>, <br />
    the <FieldSelect value={roleValue} onChange={handleValueChange(setRoleValue)} options={roles}/> of the operation.
  </div>
}

const FieldSelect = ({options, value, onChange}) => (
  <select value={value} onChange={onChange} className='character-box-field'>
    { options.map(o => <option key={o}>{o}</option>) }
  </select>
)

export default CharacterBox