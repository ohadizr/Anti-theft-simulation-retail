import React from 'react'

export const Intersection = ({ children, addClass }) => {
    return (
        <div className={`intersection ${addClass || ''}`}>
            {children}
        </div>
    )
}
export const Block = ({ children, addClass }) => {
    return (
        <div className={`block ${addClass || ''}`}>
            {children}
        </div>
    )
}

export const Cart = ({ children, addClass }) => {
    return (
        <div className={`Cart ${addClass || ''}`}>
            {children}
        </div>
    )
}
export const Carts = ({ children, addClass }) => {
    return (
        <div className={`Carts ${addClass || ''}`}>
            {children}
        </div>
    )
}