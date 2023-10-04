import './App.css';

function App() {
  return (
    <div className="App">
      <TitleBanner />
      <ExhibitComponent heading="Public IP" >
        <p>192.168.0.30:3000</p>
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
