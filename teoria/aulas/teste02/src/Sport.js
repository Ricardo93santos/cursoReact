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