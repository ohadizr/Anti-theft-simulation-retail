import React from 'react'
import './Btn.scss'


export const Btn = ({ children, addClass,onClick }) => {
    return (
        <button className={`Btn ${addClass || ''}`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}
export const BtnNaked = (props) => {
    return <Btn {...props} addClass="BtnNaked" />
}

export const BtnStandard = (props) => {
    return <Btn {...props} addClass="Standard" />
}
export const BtnClear = (props) => {
    return <Btn {...props} addClass="BtnClear" />
}
// export const BtnClear = ({ children, addClass }) => {
//     return (
//         <button className={`btnClear ${addClass || ''}`}>
//             {children}
//         </button>
//     )
// }