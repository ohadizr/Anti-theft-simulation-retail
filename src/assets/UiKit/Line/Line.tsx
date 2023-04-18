import './Line.scss';
import React from 'react';

interface LineProps {
    children: React.ReactNode;
    addClass?: string;
}


export const Line:React.FC<LineProps> = ({children,addClass}) => {
    return (
        <div className={`Line ${addClass || ''}`}>
            {children}
        </div>
    )
}

export const Rows:React.FC<LineProps> = ({children,addClass}) => {
    return (
        <div className={`Rows ${addClass || ''}`}>
            {children}
        </div>
    )
}
