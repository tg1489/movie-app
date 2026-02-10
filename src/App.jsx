import { useState } from 'react';
import './App.css';

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(true)}>Like</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <h2>Tony Guarino</h2>
      <Card title="Superman" />
      <Card title="Avatar" />
      <Card title="Avengers" />
      <Card title="The Matrix" />
    </div>
  );
};

export default App;
