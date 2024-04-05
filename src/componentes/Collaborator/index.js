import './Collaborator.css'

const Collaborator = ({name, image, employment}) => {
    return(
        <div className='collaborator'>
            <div className='header'>
                <img src={image} alt={name} />
            </div>

            <div className='footer'>
                <h4>{name}</h4>
                <h5>{employment}</h5>
            </div>

        </div>
    )
}

export default Collaborator