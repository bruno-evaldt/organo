import Collaborator from '../Collaborator'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = (props) => {

    return(


        (props.collaborators.length > 0) ? <section className='time' 
        style={{ backgroundColor: hexToRgba( props.Color, '0.6')}}>
            <input type='color' onChange={evento => props.alterColorTime(props.id, evento.target.value)} value={props.Color} className='input-color' />
            <h3 style={{borderColor: props.Color}}>{props.name}</h3>

            <div className='collaborators'>
                {props.collaborators.map( collaborator => <Collaborator 
                    colorBack={props.Color} 
                    id={collaborator.id}
                    key={collaborator.name} 
                    name={collaborator.name} 
                    employment={collaborator.employment} 
                    image={collaborator.image} 
                    deleteCollaborator={() => props.deleteCollaborator(collaborator.id)}
                    favorite={collaborator.favorite}
                    togglefavorite={props.togglefavorite}/>
                )}
            </div>
        </section>
        : ''

    )
}

export default Time