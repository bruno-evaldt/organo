import { useState } from 'react'
import Button from '../Button'
import DropDownList from '../DropDownList'
import TextField from '../TextField'
import './Form.css'
const Form  = (props) => {
        const [name, setName] = useState('')
        const [employment, setEmployment] = useState('')
        const [image, setImage] = useState('')
        const [time, setTime] = useState('')

        const saving = (evento) => {
                evento.preventDefault()
                props.registeredCollaborator({
                    name,
                    employment,
                    image,
                    time
                }) 

                setName('')
                setEmployment('')
                setImage('')
                setTime('')
                
            }
    return(
        
        <section className='back-form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory ={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                fieldtype={name}
                theChanged={fieldtype => setName(fieldtype)}/>

                <TextField mandatory ={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                fieldtype={employment}
                theChanged={fieldtype => setEmployment(fieldtype)}/>

                <TextField label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                fieldtype={image}
                theChanged={fieldtype => setImage(fieldtype)}/>

                <DropDownList mandatory ={true}
                label="Time"
                itens={props.times}
                fieldtype={time}
                theChanged={fieldtype => setTime(fieldtype)}/>

                <Button>Criar card</Button>
            </form>
        </section>
        
    )
}

export default Form