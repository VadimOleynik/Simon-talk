import React from "react";
import './index.css';

export default function Cell({color: backgroundColor, isActive, onClick}) {
    return (
        <button className={`cell ${isActive ? 'cell--active' : ''}`}
                style={{backgroundColor}}
                onClick={onClick}
        />
    )
}