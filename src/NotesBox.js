import React from 'react'

import { useQueryParam } from './hooks/queryParam'
import './style/NotesBox.css'

const handleValueChange = (cb) => ({ target: { value }}) => cb(value)

const NotesBox = () => {
  const [notesValue, setNotesValue] = useQueryParam('no', '')

  return <div className='notes-box bear'>
    <h3> Notes </h3>
    <div className='notes-container'>
      <textarea spellCheck="false" value={notesValue} onChange={handleValueChange(setNotesValue)}></textarea>
    </div>
  </div>
}

export default NotesBox