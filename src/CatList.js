import React from 'react'

const catList = (props) => {
  const cats = props.cats.cats[0] ? props.cats.cats[0] : []
  return(
    <div>
      <ul>
        {cats.map(cat => {
          return <li>
           <img src={cat.url}></img>
          </li>
        })}
      </ul>
    </div>
  )
}

export default catList