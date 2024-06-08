import { Sport } from './Sport'
const sportNames = [
  'Ciclismo', 'Basquete', 'Football',
]
export function SportList(){
  return (
    <ul>
      {sportNames.map((sportName, index) => (
        <li>
          <p>{sportName}</p>
          <Sport 
            size={300}
            sport={{
              name: sportName,
              img: index
            }}
          />
        </li>
      ))}
    </ul>
  )
}