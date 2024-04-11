import { useState } from 'react'
import Button from '../Button'
import DropDownList from '../DropDownList'
import Field from '../Field'
import './Form.css'
import { v4 as uuidv4 } from 'uuid';
const Form  = (props) => {
        const [name, setName] = useState('')
        const [employment, setEmployment] = useState('')
        const [image, setImage] = useState('')
        const [time, setTime] = useState('')
        const [nameTime, setNameTime] = useState('')
        const [colorTime, setColorTime] = useState('')

        const saving = (evento) => {
                evento.preventDefault()
                props.registeredCollaborator({
                    id: uuidv4(),
                    favorite:false,
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

        const savingTime = (evento) => {
            evento.preventDefault()
            props.registeredTime({
                name: nameTime,
                Color: colorTime
            })
            setNameTime('')
            setColorTime('')
        }
    return(
        
        <section className='back-form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field mandatory ={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                fieldtype={name}
                theChanged={fieldtype => setName(fieldtype)}/>

                <Field mandatory ={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                fieldtype={employment}
                theChanged={fieldtype => setEmployment(fieldtype)}/>

                <Field label="Imagem" 
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
            <form onSubmit={savingTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Field 
                mandatory 
                label="Nome" 
                placeholder="Digite nome do time"
                fieldtype={nameTime}
                theChanged={fieldtype => setNameTime(fieldtype)}/>

                <Field 
                mandatory  
                type='color'
                label="Cor" 
                placeholder="Digite a cor do time"
                fieldtype={colorTime}
                theChanged={fieldtype => setColorTime(fieldtype)}/>

           
                <Button>Criar time</Button>
            </form>
        </section>
        
    )
}

export default Form