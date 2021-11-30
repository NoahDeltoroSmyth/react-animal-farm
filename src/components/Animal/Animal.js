import React from 'react'

export default function Animal(props) {
  return (
    <>
      <img height="100" src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <div className="animal">
        <p>{props.name}</p>
        <p>{props.says}</p>
      </div>
    </>
  )
}
