import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() {

  const times = [
  {
    name: 'Programção',
    primaryColor: '#57C278',
    secondaryColor: '#D9F7E9'
  },
  {
    name: 'Frontend',
    primaryColor: '#82CFFA',
    secondaryColor: '#E8F8FF'
  },
  {
    name: 'Data Science',
    primaryColor: '#A6D157',
    secondaryColor: '#F0F8E2'
  },
  {
    name: 'Devops',
    primaryColor: '#E06B69',
    secondaryColor: '#FDE7E8'
  },
  {
    name: 'UX e Design',
    primaryColor: '#DB6EBF',
    secondaryColor: '#FAE9F5'
  },
  {
    name: 'Mobile',
    primaryColor: '#FFBA05',
    secondaryColor: '#FFF5D9'
  },
  {
    name: 'Inovação e Gestão',
    primaryColor: '#FF8A29',
    secondaryColor: '#FFEEDF'
  }
  
  ]

  const [collaborators, setCollaborators] = useState([])

  const newCollaborator = (collaborator) => {
      console.log(collaborator)
      setCollaborators([...collaborators,collaborator])         
  }

  return (
    <div className="App">
      <Banner/>
      <Form times={times.map(time => time.name)} registeredCollaborator={collaborator => newCollaborator(collaborator)}/>

      {times.map(time => <Time key={time.name} 
        name={time.name} 
        pColor={time.primaryColor} 
        sColor={time.secondaryColor}
        collaborators={collaborators.filter(collaborator => collaborator.time === time.name)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
