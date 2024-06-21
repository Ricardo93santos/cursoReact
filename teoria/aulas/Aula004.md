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
<h2>Lendo Props</h2>
<p>Você pode ler estas props listando seus nomes separados por vírgulas dentro de ({ e }) diretamente depois de function. Isso permite que você as use dentro do código, assim como você faria com uma variável.
  <pre>
    function Avatar({ person, size }) {
      // person e size estão disponíveis aqui
    }
  </pre>
Adicione alguma lógica a Avatar que use as props person e size para a renderização, e pronto. Agora você pode configurar Avatar para que seja renderizado de várias maneiras diferentes usando props diferentes.
</p>
<p>
Props permitem que você pense sobre os componentes pai e filho independentemente. Por exemplo, você pode mudar as props person ou size dentro de Profile sem ter que pensar sobre como Avatar as usa. Similarmente, você é livre para mudar como Avatar usa essas props, sem checar o Profile.
Você pode pensar nas props como “controles” os quais você pode ajustar. Elas desempenham o mesmo papel que os argumentos para funções-de fato, props são o único argumento para o seu componente! Os componente funcionais do React aceitam apenas um argumento, um objeto props:
  <pre>
    function Avatar(props) {
      let person = props.person;
      let size = props.size;
      // ...
    }
  </pre>
Normalmente você não precisa de todo o objeto props em si, então você pode desestruturá-lo em props individuais.
</p>

<h2>Passando JSX como <code>children</code></h2>
<p>É comum aninhar tags embutidas no navegador:
  <pre>
    &#60;div>
      &#60;img />
    &#60;/div>
  </pre>
Às vezes você desejará aninhar seus próprios componentes da mesma forma:
  <pre>
    &#60;Card>
      &#60;Avatar />
    &#60;/Card>
  </pre>
Quando você aninha conteúdo dentro de uma tag JSX, o componente pai irá receber esse conteúdo em uma prop chamada children. Por exemplo, o componente Card abaixo receberá a prop children definida como &#60;Avatar /> e o renderizará em uma wrapper div:
  <pre>
    function Card({ children }) {
      return (
        &#60;div className="card">
          {children}
        &#60;/div>
      );
    }
    export default function Profile() {
      return (
        &#60;Card>
          &#60;Avatar
            size={100}
            person={{ 
              name: 'Katsuko Saruhashi',
              imageId: 'YfeOqp2'
            }}
          />
        &#60;/Card>
      );
    }
  </pre>

É possível pensar sobre um componente com a prop children como se ele tivesse um “buraco” o qual pode ser “preenchido” por seus componente pais com JSX arbitrária. Você frequentemente usará a prop children para wrappers visuais: painéis, grids, etc.