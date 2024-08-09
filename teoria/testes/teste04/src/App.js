import './App.css';
import { Profile } from './Profile'


function App() {
  const user = {
    name: "Ricardo",
    age: 20,
  }
  
  return (
    <Profile user={user} />
  );
}

export default App;
