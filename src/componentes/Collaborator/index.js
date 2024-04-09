import './Collaborator.css'
import { AiFillCloseCircle } from 'react-icons/ai';


const Collaborator = (props) => {
    return(
        <div className='collaborator'>
              <AiFillCloseCircle size={25} color='white'className='delete' onClick={props.deleting}/>
            <div className='header' style={{backgroundColor: props.colorBack}}>
                <img src={props.image} alt={props.name} />
            </div>

            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.employment}</h5>
            </div>

        </div>
    )
}

export default Collaborator