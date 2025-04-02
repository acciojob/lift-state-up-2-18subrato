import React from 'react'

const Child = ({setAllValue}) => {
  return (
    <div className='child' style={{backgroundColor:'lightgreen',padding:'20px'}}>
        <h1>Child Component</h1>
        <input
            type='text'
            onChange={(e)=>{
                setAllValue(e.target.value)
            }}
        />
    </div>
  )
}

export default Child
