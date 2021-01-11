import React, { useState } from 'react'

import {species, roles, skills, descriptors} from './traits'
import { useQueryParam } from './hooks/queryParam'
import './style/CharacterBoxes.css'


const isVowel = str =>
    str == 'a' ||
    str == 'e' ||
    str == 'i' ||
    str == 'o' ||
    str == 'u'

const handleValueChange = (cb) => ({ target: { value }}) => cb(value)

const CharacterBoxes = ({}) => {
  const [nameValue, setNameValue] = useQueryParam('n', '')
  const [descriptorValue, setDescriptorValue] = useQueryParam('d', descriptors[0])
  const [speciesValue, setSpeciesValue] = useQueryParam('s', species[0])
  const [roleValue, setRoleValue] = useQueryParam('r', roles[0])

  const nameInput = <input
    type='text'
    value={nameValue}
    onChange={handleValueChange(setNameValue)}
    placeholder='name'
    className='character-box-field'/>

  const descriptorInput = <FieldSelect
    value={descriptorValue}
    onChange={handleValueChange(setDescriptorValue)}
    options={descriptors}/>

  const speciesInput = <FieldSelect
    value={speciesValue}
    onChange={handleValueChange(setSpeciesValue)}
    options={species}/>

  const roleInput = <FieldSelect
    value={roleValue}
    onChange={handleValueChange(setRoleValue)}
    options={roles}/>

  return <>
    <div className='character-box bear'>
      Hi!
      I am {nameInput}.<br />
      I am a{isVowel(descriptorValue[0]) && 'n'} {descriptorInput}
        <span className='gap'/>
        {speciesInput}, <br />
      the {roleInput} of the operation.
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
