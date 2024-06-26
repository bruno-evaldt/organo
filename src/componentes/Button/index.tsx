import { ReactElement } from 'react'
import './Button.css'
import React from 'react';

interface ButtonProps {
    children: ReactElement
      
}

const Button = (props: ButtonProps) => {
    return(<button className='buttonCard'>
        {props.children}
    </button>
    )
}
export default Button