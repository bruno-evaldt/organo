import Collaborator from '../Collaborator'
import './Time.css'

const Time = (props) => {

    return(


        (props.collaborators.length > 0) ? <section className='time' style={{ backgroundColor: props.sColor }}>
            <h3 style={{borderColor: props.pColor}}>{props.name}</h3>

            <div className='collaborators'>
                {props.collaborators.map( collaborator => <Collaborator name={collaborator.name} employment={collaborator.employment} image={collaborator.image}/>)}
            </div>
        </section>
        : ''

    )
}

export default Time