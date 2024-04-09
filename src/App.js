import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() {

  const [times, setTimes] = useState( [
  {
    name: 'Programção',
    Color: '#57C278',
  },
  {
    name: 'Frontend',
    Color: '#82CFFA',
  },
  {
    name: 'Data Science',
    Color: '#A6D157',
  },
  {
    name: 'Devops',
    Color: '#E06B69',
  },
  {
    name: 'UX e Design',
    Color: '#DB6EBF',
  },
  {
    name: 'Mobile',
    Color: '#FFBA05',
  },
  {
    name: 'Inovação e Gestão',
    Color: '#FF8A29',
  }
  ])

  const [collaborators, setCollaborators] = useState([])

  const newCollaborator = (collaborator) => {
      console.log(collaborator)
      setCollaborators([...collaborators,collaborator])         
  }

  function deleteCollaborator () {
    console.log('Deletado')
  }

  function alterColorTime (props) {
    setTimes(times.map(time => {
      if(time.name ===  props.name){
        time.Color = props.Color;
      }
      return time;
    }));

  }


  return (
    <div className="App">
      <Banner/>
      <Form times={times.map(time => time.name)} registeredCollaborator={collaborator => newCollaborator(collaborator)}/>
      {times.map(time => <Time
        key={time.name} 
        alterColorTime={alterColorTime}
        name={time.name} 
        Color={time.Color} 
        collaborators={collaborators.filter(collaborator => collaborator.time === time.name)}
        deleteCollaborator={deleteCollaborator}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
