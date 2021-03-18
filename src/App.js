import './App.css';
import CardList from './components/CardList';
import GhForm from './components/GhForm';
import { useState } from 'react';

function App() {

  const [profiles, setProfiles] = useState([]);

  const addCard = (p) => {
    setProfiles([...profiles, p])

  }

  return (
    <div className="container">
      <div className="header">
        <h2>
          The GitHub Cards App
      </h2>
      </div>
      <GhForm onSubmit={addCard}></GhForm>
      <CardList profiles={profiles}></CardList>
    </div>

  );
}

export default App;
