export function Profile({user}){
  let name = user.name;
  let age = user.age;

  return(
    <>
      <p>Olá, {name}. Seja bem vindo!</p>
      <p>Vejo que você tem {age}.</p>
    </>
  ) 
}