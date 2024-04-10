import './Collaborator.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


const Collaborator = (props) => {
    function togglefavorite ()  {
        props.togglefavorite(props.id);
    }
    return(
        <div className='collaborator'>
              <AiFillCloseCircle 
              size={25} 
              color='white'
              className='delete' 
              onClick={() => props.deleteCollaborator(props.id)}
              />
            <div className='header' style={{backgroundColor: props.colorBack}}>
                <img src={props.image} alt={props.name} />
            </div>

            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.employment}</h5>
            </div>
            <div className='favoriteHeart'>
                    {collaborator.favorite ? <AiFillHeart size={25} onClick={togglefavorite}/> : <AiOutlineHeart size={25} onClick={togglefavorite}/>}
            </div>

        </div>
    )
}

export default Collaborator