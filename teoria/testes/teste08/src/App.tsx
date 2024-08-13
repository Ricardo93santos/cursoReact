import React from 'react';
import EffectButton from './EffectButton';
import NotEffectButton from './NotEffectButton';
import "./index.css"


function App() {
  return (
    <div>
      <div>
        <p>This button has no effect:</p>
        <NotEffectButton />
      </div>
      <div className="toolbar" onClick={() => {
        alert(`You clicked toolbar!`)
      }}>
        <p>These buttons are the same component:</p>
        <EffectButton message="You clicked button 1">
          Button 1
        </EffectButton>
        <EffectButton message="You clicked button 2">
          Button 2
        </EffectButton>
      </div>
    </div>
  );
}

export default App;