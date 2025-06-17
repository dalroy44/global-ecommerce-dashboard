// src/components/Button.tsx

import React from 'react'
import './Button.scss' // Import the styles for this component

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
    // Notice how clean the JSX is!
    return (
        <button className="primary-button" {...props}>
            {children}
        </button>
    )
}