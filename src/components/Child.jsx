import React from 'react'

const Child = ({setAllValue}) => {
  return (
    <div className='child' style={{backgroundColor:'lightgreen',padding:'20px'}}>
        <h1>Child Component</h1>
        <form>
        <input
            type='text'
            onChange={(e)=>{
                setAllValue(e.target.value)
            }}
        />
        </form>
    </div>
  )
}

export default Child
