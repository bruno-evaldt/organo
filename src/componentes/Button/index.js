import './Button.css'


const Button = (props) => {
    return(<button className='buttonCard'>
        {props.children}
    </button>

    )
}

export default Button