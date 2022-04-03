import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table';


function FilterByStatus({filter, setFilter}) {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce(value => {
      setFilter( value || undefined)
  },100)

  return (
    <span className='filter'>
        Filter: {" "}
        <select 
            value={value || ' '}
            onChange = { (e) => {
                setValue(e.target.value)
                onChange(e.target.value);
            }}
        >
            <option />
            <option>Delivered</option>
            <option>Completed</option>
            <option>Prepared</option>
            <option>Prepone</option>
        </select>
        {/* <input 
            value={value || ' '}
            onChange = { (e) => {
                setValue(e.target.value)
                onChange(e.target.value);
            }}
            /> */}
    </span>
  )
}

export default FilterByStatus