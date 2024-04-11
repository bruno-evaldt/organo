import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState( [
  {
    id: uuidv4(),
    name: 'Programção',
    Color: '#57C278',
  },
  {
    id: uuidv4(),
    name: 'Frontend',
    Color: '#82CFFA',
  },
  {
    id: uuidv4(),
    name: 'Data Science',
    Color: '#A6D157',
  },
  {
    id: uuidv4(),
    name: 'Devops',
    Color: '#E06B69',
  },
  {
    id: uuidv4(),
    name: 'UX e Design',
    Color: '#DB6EBF',
  },
  {
    id: uuidv4(),
    name: 'Mobile',
    Color: '#FFBA05',
  },
  {
    id: uuidv4(),
    name: 'Inovação e Gestão',
    Color: '#FF8A29',
  }
  ])

  const [collaborators, setCollaborators] = useState([])

  const newCollaborator = (collaborator) => {
      console.log(collaborator)
      setCollaborators([...collaborators,collaborator])         
  }

  function deleteCollaborator (id) {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }


  function alterColorTime (id, Color) {
    console.log("ID:", id);
    console.log("Color:", Color);
    setTimes(times.map(time => {
      if(time.id ===  id){
        time.Color = Color;
      }
      return time;
    }));

  }

  function registeredTime (newTime) {
      setTimes([...times, {...newTime, id: uuidv4()}])
      console.log(registeredTime)
  }
  
  console.log(likeFavorite)
  function likeFavorite (id) {
    setCollaborators(collaborators.map(collaborator =>{
      if(collaborator.id === id)collaborator.favorite =!collaborator.favorite
      return collaborator;
    }))} 
   
    

  return (
    <div className="App">
      <Banner/>
      <Form
        registeredTime={newTime => registeredTime(newTime)} 
        times={times.map(time => time.name)}
        registeredCollaborator={collaborator => newCollaborator(collaborator)}/>
      
      {times.map(time => <Time
        key={time.name} 
        id = {time.id}
        name={time.name} 
        Color={time.Color} 
        alterColorTime={alterColorTime}
        collaborators={collaborators.filter(collaborator => collaborator.time === time.name)}
        registeredTime={registeredTime}
        deleteCollaborator={deleteCollaborator}
        togglefavorite={likeFavorite}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
