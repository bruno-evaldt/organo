
import './Field.css'



const Field = (props) => {


    const toWrite = (evento) =>{
        props.theChanged(evento.target.value)
        }

    return(
        <div className='field'>
            <label>{props.label}</label>
            <input type={props.type} value={props.fieldtype} onChange={toWrite} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}
export default Field