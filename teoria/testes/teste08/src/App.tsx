import React from 'react';
import EffectButton from './EffectButton';
import NotEffectButton from './NotEffectButton';


function App() {
  return (
    <>
      <div>
        <p>This button has no effect:</p>
        <NotEffectButton />
      </div>
      <div>
        <p>These buttons are the same component:</p>
        <EffectButton message="You clicked button 1">
          Button 1
        </EffectButton>
        <EffectButton message="You clicked button 2">
          Button 2
        </EffectButton>
      </div>
    </>
  );
}

export default App;