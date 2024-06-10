import { getImgUrl } from './galery'

export function Sport({ sport, size }) {
  return (
    <>
      <img 
        className="avatar"
        src={getImgUrl(sport)}
        alt={sport.sportName}
        width={size}
        height={size}
      />
    </>
  )
}

/*
Podemos atribuir ao componente apenas um atributo de prop e capturar cada prop passado pelo componente pai em uma variável e trabalhar dentro de nosso componente. Veja que, ao invez de passar dois props dentro das chaves, { sport, size }, passamos apenas um valor chamdo props e criamos cada variável respectivamente ao prop que vai ser usado. Esta sintaxe é chamada de “desestruturação” e é equivalente a ler propriedades de um parâmetro de função.

export function Sport(props) {;
  let sport = props.sport
  let sportName = props.sport.sportName;
  let size = props.size;
  return (
    <>
      <img 
        className="avatar"
        src={getImgUrl(sport)}
        alt={sportName}
        width={size}
        height={size}
      />
    </>
  )
}
*/