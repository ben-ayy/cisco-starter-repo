import React, { Component } from 'react';
import './App.css';
import AddressDisplay from './AddressDisplay';
import PacketLatency from './PacketLatency';

function App() {
  return (
    <div className="App">
      <TitleBanner />
      <ExhibitComponent heading="Public IP" >
        <div>
        <AddressDisplay url="https://api.ipify.org?format=json"/>
        </div>
        <AddressDisplay url="https://api64.ipify.org?format=json"/>
      </ExhibitComponent>
      <ExhibitComponent heading="Latency" >
        <PacketLatency url="ws://localhost:55455" />
      </ExhibitComponent>
    </div>
  );
}

function TitleBanner() {
  return(<h1>
    Sextant
  </h1>);
}

function ExhibitComponent(props) {
  return(
    <div>
      <h2>{ props.heading }</h2>
      <div>
        {props.children}
      </div>
    </div>
  );
}



export default App;
