import './Grid.scss';
import React from 'react';

interface GridProps {
    children: React.ReactNode;
    addClass?: string;
}
export const Grid:React.FC<GridProps> = ({children,addClass}) => {
    return (
        <div className={`Grid ${addClass || ''}`}>
            {children}
        </div>

    )
}
