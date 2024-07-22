import './App.css';
import Filling from './components/Filling';
import TopBread from './components/TopBread';
import BottomBread from './components/BottomBread';
import { useEffect, useState } from 'react';
import FillingPicker from './components/FillingPicker';

interface FillingType {
  color: string;
  type: string;
  id: string;  // Change to string
}

const App = () => {
  const [filling, setFilling] = useState<FillingType[]>([]);

  const removeLayer = (id: string) => {  // Change to string
    setFilling(filling.filter((layer) => layer.id !== id));
  };

  useEffect(() => {
    fetch('http://localhost:8000/filling')
      .then(res => res.json())
      .then((data: FillingType[]) => setFilling(data))
      .catch(err => console.error("Error fetching data: ", err));
  }, []);

  return (
    <div className="burger">
      <h1>Welcome to Gee's Burger</h1>
      <TopBread />
      {filling.map((layer) => (
        <Filling
          key={layer.id}
          id={layer.id}
          color={layer.color}
          type={layer.type}
          removeLayer={removeLayer}
        />
      ))}
      <BottomBread />
      <hr />
      <div style={{ height: '50px' }}></div>
      <FillingPicker setFilling={setFilling} />
      <hr />
    </div>
  );
};

export default App;
