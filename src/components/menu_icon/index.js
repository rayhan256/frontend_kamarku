import React from 'react'
import './index.scss'

export default function MenuIcon({name, image, desc}) {
    return (
        <div>
            <div className="icon-wrapper">
                <img src={image} alt={name} className="icon-img"/>
                <div className="icon-desc">
                    <h5 className="title">{name}</h5>
                    <p className="desc">{desc}</p>
                </div>
            </div>
        </div>
    )
}
