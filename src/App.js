import React from 'react';
import './App.css';
import IdCard from './component/idcard/IdCard';
import Greeting from './component/greeting/Greeting';
import Random from './component/random/Random';
import BoxColor from './component/boxcolor/BoxColor';

function App() {
  return (
    <div className="App">
      <IdCard 
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"/>
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <Greeting lang="es">Juan</Greeting>
      <Greeting lang="en">John</Greeting>
      <Greeting >Paulo</Greeting>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={128} g={255} b={255} />
    </div>

  );
}

export default App;
