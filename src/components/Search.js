import React, { useState } from 'react'

export const Search = ({column}) => {

  const { filterValue, setFilter} = column
  return (
    <span className='search'>
        Search: {" "}
        <input 
            placeholder='Customer Name'
            value={filterValue || ''}
            onChange = { (e) => {
              setFilter(e.target.value)
            }}
          />
    </span>
  )
}
