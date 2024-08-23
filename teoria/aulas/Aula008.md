<h1>Hook useState</h1>
<p> O useState é um dos hooks mais fundamentais e utilizados no React. Ele permite que você adicione estado a componentes funcionais. Vamos explorar como ele funciona em detalhes.</p>
<h2>O que é <code>useState</code>?</h2>
<p>O useState é uma função que permite adicionar estado a componentes funcionais. Antes dos hooks, apenas componentes de classe podiam ter estado. Com o useState, você pode usar estado em componentes funcionais de forma simples e direta.</p>
<h2>Como usar o <code>useState</code></h2>
<p>Para usar o <code>useState</code>, você precisa importá-lo do React e chamá-lo dentro do seu componente funcional. Ele retorna um array com dois elementos: o estado atual e uma função para atualizá-lo.
<pre>Importando useState:
    import React, { useState } from 'react';</pre>
<pre>Array de retorno:
    const [count, setCount] = useState(0);
A convenção é nomear esse par como const [algo, setAlgo].
</pre>
O único argumento para o useState é o valor inicial da sua variável de state. Nesse exemplo, o valor inicial de count é definido como 0 com useState(0).
<pre>
import React, { useState } from 'react';

function MeuComponente() {
  // Declara uma variável de estado chamada "count" e uma função "setCount" para atualizá-la
  const [count, setCount] = useState(0);

  return (
    &#60;div>
      &#60;p>Você clicou {count} vezes&#60;/p>
      &#60;button onClick={() => setCount(count + 1)}>Clique aqui&#60;/button>
    &#60;/div>
  );}</pre>
</p>
<h2>Explicação Detalhada</h2>
<ol>
  <li><strong>Importação:</strong> Primeiro, você importa o useState do React.
    <pre>import React, { useState } from 'react';</pre>
  </li>
  <li><strong>Declaração do Estado:</strong> Dentro do seu componente funcional, você chama useState e passa o valor inicial do estado como argumento. No exemplo acima, o valor inicial é <code>0</code>.
    <pre>const [count, setCount] = useState(0);</pre>
  </li>
  <li><strong>Acessando o Estado:</strong> O primeiro elemento do array retornado por useState é o valor atual do estado <code>(count)</code>, e o segundo é a função que você usa para atualizar o estado <code>(setCount)</code>.</li>
  <li><strong>Atualizando o Estado:</strong> Para atualizar o estado, você chama a função setCount com o novo valor. No exemplo, o estado é incrementado em 1 cada vez que o botão é clicado.
  <pre>
    &#60;button onClick={() => setCount(count + 1)}>
      Clique aqui
    &#60;/button></pre>
  </li>
<ol>
<h2>Trabalhando com Objetos e Arrays</h2>
<p>Você pode usar <code>useState</code> para gerenciar estados mais complexos, como objetos e arrays. Exemplo com Objeto:</p>
<pre>
import React, { useState } from 'react';

export default function Formulario() {
  const [formData, setFormData] = useState({ nome: '', email: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    &#60;form>
      &#60;input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      &#60;input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
    &#60;/form>
  );
}
</pre>
<p>Neste exemplo, <code>formData</code> é um objeto que contém os campos do formulário. A função handleChange atualiza o estado com base no campo que foi alterado.</p>
<h2>Dicas e Boas práticas</h2>
<ul>
  <li><strong>Estado Inicial:</strong> O valor inicial do estado pode ser qualquer tipo de dado: número, string, objeto, array, etc.</li>
  <li><strong>Função de Atualização:</strong> A função de atualização pode receber o valor novo diretamente ou uma função que recebe o estado anterior e retorna o novo estado.</li>
  <li><strong>Imutabilidade:</strong> Sempre crie novos objetos ou arrays ao atualizar o estado para manter a imutabilidade.</li>
</ul>