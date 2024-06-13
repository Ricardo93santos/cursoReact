import { Sport } from './Sport'
import './style.css';

function Card({children}){
  return (
    <div className="card">
      {children}
    </div>
  );
}
const sportNames = [
  'Ciclismo', 'Basquete', 'Football',
]
export function SportList(){
  return (
    <>
        <ul>
      {sportNames.map((sportName, index) => (
       <li>
          <p>{sportName}</p>
          <Card>
          <Sport
            size={250}
            sport={{
              name: sportName,
              img: index
            }}
          />
          </Card>
        </li>
      ))}
    </ul>
    <Card>
      <p>Olá, Mundo!</p>
    </Card>
    </>
  )
}