import React from 'react'
import './style.css'

export default function RegisterPolicy(props) {
    const {policy} = props;
    return (
        <p className="register__policy">{policy}</p>
    )
}
