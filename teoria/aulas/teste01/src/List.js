import { Component } from 'react';
import './index.css'

let imgStructure = [
  {
    link: "https://www.jrmcoaching.com.br/wp-content/uploads/2015/07/1-Otimista.jpg",
    name: "Otimista"
  }, 
  {
    link: 'https://static.wixstatic.com/media/3abfb8_5cbff4fa2f1a4143950bc388cc7e9f74~mv2.jpeg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3abfb8_5cbff4fa2f1a4143950bc388cc7e9f74~mv2.jpeg',
    name: 'Persimista'
  }, 
  {
    link: 'https://noticiasconcursos.com.br/wp-content/uploads/2022/01/noticiasconcursos.com.br-como-ser-uma-pessoa-confiante-pessoa-confiante.jpg',
    name: 'Confiante'
  },
  {
    link: 'https://www.sbie.com.br/wp-content/uploads/2016/07/1-Inveja.jpg',
    name: 'Invejoso'
  },
];

class PersonalityList extends Component {
  render(){
    return (
      <ul>
        <li>
          <h2>{imgStructure[0].name}</h2>
          <img className="personalityImg"
            src={imgStructure[0].link}
            alt={imgStructure[0].name}
            width={100}
            height={100}
          />
        </li>
        <li>
          <h2>{imgStructure[1].name}</h2>
          <img className="personalityImg"
            src={imgStructure[1].link}
            alt={imgStructure[1].name}
            width={100}
            height={100}
          />
        </li>
        <li>
          <h2>{imgStructure[2].name}</h2>
          <img className="personalityImg"
            src={imgStructure[2].link}
            alt={imgStructure[2].name}
            width={100}
            height={100}
          />
        </li>
        <li>
          <h2>{imgStructure[3].name}</h2>
          <img className="personalityImg"
            src={imgStructure[3].link}
            alt={imgStructure[3].name}
            width={100}
            height={100}
          />
        </li>
      </ul>
    )
  }
}

export default PersonalityList;