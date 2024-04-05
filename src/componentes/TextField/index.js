
import './TextField.css'



const TextField = (props) => {


    const toWrite = (evento) =>{
        props.theChanged(evento.target.value)
        }

    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.fieldtype} onChange={toWrite} required={props.mandatory} placeholder={props.placeholder}/>
            
        </div>
    )
}
export default TextField