import React from 'react'
import './style.css'

export default function SelectCpn(props) {
    const {option, title, width, ...extProps} = props;
    return (
        <select 
            className="register__select" 
            style={{width}}
            {...extProps}
        >
            <option>{title}</option>
            {option?.map((data) => (
                <option key={data} value={data}>{data}</option>
            ))}
        </select>
    )
}
