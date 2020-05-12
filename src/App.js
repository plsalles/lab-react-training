import React from 'react';
import './App.css';
import IdCard from './component/idcard/IdCard';
import Greeting from './component/greeting/Greeting';
import Random from './component/random/Random';
import BoxColor from './component/boxcolor/BoxColor';
import CreditCard from './component/creditcard/CreditCard';

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
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
    </div>

  );
}

export default App;
