import './App.css';
import Filling from './components/Filling';
import TopBread from './components/TopBread';
import BottomBread from './components/BottomBread';
import { useEffect, useState } from 'react';
import FillingPicker from './components/FillingPicker';

const initialFilling = [
  {color: "red", type: "Tomato",id:1},
  {color: "brown", type: "Meat",id:2},
  {color: "green", type: "Lettuce",id:3}
];
const  App = () => {
  const [filling, setFilling] = useState(initialFilling);
  //const [filling, setFilling] = useState(null);
  const removeLayer = (id: number) => {
      setFilling(filling.filter((layer) => layer.id !== id));
  
    };
  useEffect(() => {
      fetch('http://localhost:8000/filling')
      .then(res => {
        return res.json();
      })
      .then(data => 
      {
        setFilling(data);
      })
  }
);
 
return (
  <div className="burger">
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
}
export default App;
