import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.post.image} alt="" />
            <div className='info'>
                <h1>{props.post.title}</h1>
                <p>{props.post.description}</p>
                <button onClick={props.onClick}>Buy ${props.post.price}</button>
            </div>
        </div>
    )
}

export default Card