import React, { useState } from 'react'

export const Search = ({data,setData, setFilter}) => {
  const [val, setVal] = useState("");
  
  return (
    <span className='search'>
        Search: {" "}
        <input 
            placeholder='Customer Name'
            value={val}
            onChange = { (e) => {
              setVal(e.target.value)
            }}
          />
    </span>
  )
}
