import React from "react";
import './index.css';

export default function Cell ({color: backgroundColor}) {
    return (
        <button className="cell" style={{backgroundColor}}/>
    )
}