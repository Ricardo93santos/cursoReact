<h1>Renderizando Listas</h1>
<p>
  É comum a necessidade de se exibir vários componentes semelhantes a partir de uma coleção de dados. Podendo usar os métodos de array JavaScript para manipular um array de dados, como pro exempo <code>filter()</code> e <code>map()</code> para filtrar e transformar seu array de dados em um array de componentes.
</p>
<h2>Renderizando dados de arrays</h2>
<p>
  Digamos que você tenha uma lista de informações. As únicas diferenças entre os itens da lista são seus conteúdos, seus dados. Nestas situações, você pode armazenar esses dados em objetos ou arrays JavaScript e usar métodos como map() e filter() para renderizar listas de componentes a partir deles.
</p>
<p>
 Exemplo de como gerar uma lista de itens a partir de um array:
<ol>
  <li>Mova os dados para um array:
  <pre>
    const people = [
      'Creola Katherine Johnson: mathematician',
      'Mario José Molina-Pasquel Henríquez: chemist',
      'Mohammad Abdus Salam: physicist',
      'Percy Lavon Julian: chemist',
      'Subrahmanyan Chandrasekhar: astrophysicist'
    ];
  </pre>
  </li>Mapeie os membros de <code>people</code> a um novo array de nós JSX, <code>listItems</code>:
  <pre>
  const listItems = people.map(person => <li>{person}</li>);
  </pre>
  <li>Retorne listItems do seu componente dentro de uma &#60;ul>:
  <pre>
  return &#60;ul>{listItems}&#60;/ul>;
  </pre>
  </li>  
<ol>

<h2>Filtrando arrays de itens</h2>
<p>
Esses dados podem ser estruturados ainda mais.
<pre>
  const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];
</pre>
Vamos supor que você queira exibir somente as pessoas cuja profissão seja 'chemist'. Neste caso, voce pode usar o método <code>filter()</code> do JavaScript para retornar apenas essas pessoas.<br> Este método recebe um array de itens, os quais são submetidos a um “teste” (uma função que retorna true ou false), e retorna um novo array contendo apenas aqueles itens os quais passaram no teste (retornaram true).<br>
Você quer apenas os itens onde profession seja 'chemist'. A função “teste” para isto ficaria assim <code>(person) => person.profession === 'chemist'</code>. Veja como juntar tudo isso:
<ol>
<li>
Crie um novo array contendo apenas pessoas cuja profissão é “chemist”, chemists, chamando filter() em people e filtrando por person.profession === 'chemist':
<pre>
const chemists = people.filter(person =>
  person.profession === 'chemist'
);
</pre>
</li>
<li>
Agora mapeie sobre chemists:
<pre>
const listItems = chemists.map(person =>
  &#60;li>
     &#60;img
       src={getImageUrl(person)}
       alt={person.name}
     />
     &#60;p>
       &#60;strong>{person.name}:&#60;/strong>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     &#60;/p>
  &#60;/li>
);
</pre>
</li>
<li>Por fim, retorne listItems em seu componente:
<pre>
return &#60;ul>{listItems}&#60;/ul>;
</pre>
</li>
</ol>
</p>
<h2>Mantendo itens em ordem com key</h2>
<p>
Você precisa dar a cada item do array uma key — uma string ou um número que o identifique unicamente dentre os demais itens naquele array:
<pre>
&#60;li key={person.id}>...&#60;/li>
</pre>
<strong>Elementos JSX retornados por um chamado map() sempre precisam de keys!</strong><br>
</p>
<p>
Keys dizem ao React a qual item do array cada componente corresponde, para que ele possa combiná-los mais tarde. Isso se torna importante se os itens do seu array podem se mover (por exemplo, ao ser ordenado), serem inseridos, ou serem removidos. Uma key bem escolhida ajuda o React a identificar o que exatamente aconteceu, e fazer as atualizações corretas à árvore da DOM.<br>
Em vez de gerar keys em tempo real, você deve incluí-las em seus dados:
<pre>
//data.js
export const people = [{
  id: 0, // Usado no JSX como key
  name: 'Creola Katherine Johnson',
  ...
}, {
  id: 1, // Usado no JSX como key
  name: 'Mario José Molina-Pasquel Henríquez',
  ...
}, {
  id: 2, // Usado no JSX como key
  name: 'Mohammad Abdus Salam',
  ...
}, {
  id: 3, // Usado no JSX como key
  name: 'Percy Lavon Julian',
  ...
}, {
  id: 4, // Usado no JSX como key
  name: 'Subrahmanyan Chandrasekhar',
  ...
}];
// App.js
export default function List() {
  const listItems = people.map(person =>
    &#60;li key={person.id}>
      &#60;img
        src={getImageUrl(person)}
        alt={person.name}
      />
    ...
</pre>
</p>

<h2>Exibindo múltiplos nós da DOM para cada item da lista</h2>
<p>
O que fazer quando cada item precisa renderizar não um, mas múltiplos nós da DOM?

A sintaxe abreviada <>...</> Fragment não deixará com que você passe uma key, por conta disto você precisa agrupá-los em uma única &#60;div>, ou então usar a um pouco mais longa e mais explícita sintaxe &#60;Fragment>:
<pre>
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  &#60;Fragment key={person.id}>
    &#60;h1>{person.name}&#60;/h1>
    &#60;p>{person.bio}&#60;/p>
  &#60;/Fragment>
);
</pre>
Fragmentos desaparecem da DOM, então isto irá produzir uma lista plana de &#60;h1>, &#60;p>, &#60;h1>, &#60;p>, e assim por diante.
</p>

<h2>Onde conseguir sua key</h2>
<p>
As chaves podem vir de diferentes fontes de dados:
<ul>
<li><strong>Dados de uma base de dados:</strong> Se seus dados estão vindo de uma base de dados, você pode usar as keys/IDs desta, os quais são únicos por natureza.</li>
<li><strong>Dados gerados localmente:</strong> Se seus dados são gerados e persistidos localmente (por exemplo, anotações em um aplicativo de notas), use um contador incremental, crypto.randomUUID() ou um biblioteca como a uuid ao criar itens.</li>
</ul>
</p>

<h2>Regras das keys</h2>
<ul>
<li><strong>Keys devem ser únicas entre suas irmãs.</strong> Entretanto, é tranquilo usar as mesmas chaves para nós JSX em arrays diferentes.</li>
<li><strong>Keys não devem mudar</strong> caso contrário, isso vai contra o seu propósito! Não as gere durante a renderização.</li>
</ul>