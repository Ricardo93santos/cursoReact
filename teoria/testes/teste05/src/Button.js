export function Button({ labelBtn }) {
  return (
    <div>
      <h1>Esse é um botão que recebe um prop como label</h1>
      <button>{ labelBtn }</button>
    </div>
  )
}