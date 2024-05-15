<h1>Props no React</h1>
<p>No React <code>props</code> é uma abreviação para propriedades. São uma forma de um componente pai passar informações para um componente filho. Podendo ser consideradas como um argumento de uma função, elas funcionam de forma similar aos atributos do HTML, podendo também ser passado qualquer valor JavaScript, incluindo objetos, arrays e fuções, permitindo que um componente receba informações externas para serem utilizadas em sua renderização.</p>
<p>As <code>props</code> são entradas que não podem ser alteradas dentro de um componente. Componentes devem, obrigatoriamente, apenas ler as <code>props</code>. Sendo assim, todos os componentes de React devem ser “puros” e não podem alterar nenhum valor das <code>props</code>.</p>

<h2>Sintaxe da porps</h2>
<p>No React o componente pai renderiza um componente filho e pode passar dados para ele através de <code>props</code>. A sintaxe para definir <code>props</code> é feita no componente filho, mas os valores para essas <code>props</code> são passados pelo componente pai.</p>
<p>Veja o exemplo:
<pre>
// Componente Pai
function ComponentePai() {
  return &#60;ComponenteFilho nome="João" />;
}
// Componente Filho
function ComponenteFilho(props) {
  return &#60;h1>Olá, {props.nome}&#60;/h1>;
}</pre>
Neste exemplo, <code>ComponentePai</code> é o componente pai que está renderizando <code>ComponenteFilho</code>. Ele passa uma prop chamada nome com o valor "João" para <code>ComponenteFilho</code>.
<code>ComponenteFilho</code> é o componente filho que recebe props como um argumento e usa <code>props.nome</code> para acessar o valor da prop que foi passada para ele. Então, ele renderiza um elemento &#60;h1> que diz “Olá, João”.
</p>
<p>Como visto a sitaxe para passar <code>props</code> para um componente filho é bem simples. Basta simplesmente incluir as <code>props</code> como atributos quando renderiza o componente filho.

Veja um exemplo com componentes de classes:
<pre>
class App extends React.Component {
  render() {
    return &#60;Welcome name="João" />;
  }
}

class Welcome extends React.Component {
  render() {
    return &#60;h1>Olá, {this.props.name}&#60;/h1>;
  }
}
</pre>
Neste exemplo, "Welcome" é um componente de classe que estende <code>React.Component</code>. Ele usa <code>this.props</code> para acessar as propriedades que foram passadas para ele.
</p>