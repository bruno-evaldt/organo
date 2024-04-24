import './Field.css'

interface FieldProps {
    theChanged: (valor: string) => void
    placeholder: string
    label: string
    fieldtype: string
    mandatory: boolean

}


const Field = (props: FieldProps) => {

    const placeholderModified = `${props.placeholder}...`


    const toWrite = (evento: React.ChangeEvent<HTMLInputElement>) =>{
        props.theChanged(evento.target.value)
        }

    return(
        <div className='field'>
            <label>{props.label}</label>
            <input 
            // type={props.type} 
            value={props.fieldtype} 
            onChange={evento => toWrite} 
            required={props.mandatory} 
            placeholder={placeholderModified}/>
        </div>
    )
}
export default Field