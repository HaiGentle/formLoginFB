import React from 'react'
import './style.css'

export default function RegisterTitleCpn(props) {
    const {title, text} = props
    return (
        <div>
            <p className="regis__title">{title}</p>
            <p className="regis__text">{text}</p>
        </div>
    )
}
