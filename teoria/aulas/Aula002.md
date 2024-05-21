<h2>Onde usar o React</h2>
<p>O React é uma biblioteca JavaScript usada para renderizar interfaces de usuários (UI). Que é formada por qualquer parte da aplicação, como um botão, texto ou imagens. O React permite a combinação desses elementos em componentes, que pode ser reutilizados em qualquer parte de nossa aplicação.</p>
<p>O React é geralmente usado na página toda, onde em uma 'div', com id ou class especifico, será usado para gerar todos os scripts atravez da importação do ReactDOM, em um arquivo 'index.js', que vai renderisar o conteudo na div. Ou o React pode ser usado em locias específicos da página, como um menu, uma section, etc e adicionar o restante dos elementos do site, seja HTML, CSS ou JavaScript puro, no arquivo 'index.html'.</p>

<ul>
  <li>Inserindo React em uma única div
  <pre>
    //Arquivo index.js
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import Mydiv from './minhaDiv';
    import reportWebVitals from './reportWebVitals';
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      &#60;React.StrictMode&#62;
        &#60;App /&#62;
        &#60;Mydiv /&#62;
      &#60;/React.StrictMode&#62;
    );

    //Arquivo index.html
    &#60;body&#62;
      &#60;noscript>You need to enable JavaScript to run this app.&#60;/noscript&#62;
      &#60;div id="root"&#62;&#60;/div&#62;
    ...
  </pre>

  </li>
  <li>Inserindo React em mais de uma div da página:<pre>
      //Arquivo index.js
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import './index.css';
      import App from './App';
      import Mydiv from './minhaDiv';
      import reportWebVitals from './reportWebVitals';

      const tst = ReactDOM.createRoot(document.querySelector('.minhaDiv'));
      tst.render(
        <React.StrictMode>
          <Mydiv />
        </React.StrictMode>
      );

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );

      //Arquivo index.html
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>;
        <div id="root"></div>;
        <div class="minhaDiv"></div>;
      ...
  </pre>
  </li>
</ul>
<p>O resultado nos dois casos será:</p>
  <img src="https://github.com/Ricardo93santos/cursoReact/assets/69050591/b34aa0e7-14aa-4cde-9461-5e90a7a68765" width = "350px">

<h2>O que são componentes no React</h2>
<p>Como visto antes, aplicações React são construídas a partir de partes isoladas da UI chamadas de componentes. Um componente React é uma função JavaScript que permite você adicionar tags HTML. Os componentes podem ser tão pequenos quanto um botão ou tão grandes quanto uma página inteira.<br>
Como nesse exemplo, arquivo 'saudacao.js':
<pre>
import './App.css';

function Saudacao(){
  return(
    &#60;div className="saudacao">;
      &#60;p>Olá Mundo!&#60;/p>
      &#60;p>Estou realizando um teste no React.&#60;/p>
    &#60;/div>
  );
}
export default Saudacao()
</pre>
<ol>
  <li>import './App.css';
    <p>Usado para importar a estilização que está no arquivo 'App.css', para o elemento '&#60;div className="minhaDiv">'</p>
  </li>
  <li>function Saudacao(){ }
    <p>Essa sintaxe é usada para definir a função chamada 'Saudacao', que retorna os elementos HTML que serão renderizados.</p>
  </li>
  <li>&#60;div className="saudacao">; e demais elementos HTML
    <p>O componente React, 'Saudacao', retorna uma tag <code>&#60;div>&#60;/div></code> e suas tags filhas <code>&#60;p>&#60;/p></code>, que escritos como HTML, mas na verdade, é o JavaScript que está por trás! Essa sintaxe é chamada JSX e permite usar tags HTML dentro do JavaScript.</p>
  </li>
  <li>export default
    <p>O prefixo export default é uma sintaxe padrão do JavaScript (não específica do React). Ele permite que você marque a função principal em um arquivo para que você possa mais tarde importá-la de outros arquivos.</p>
  </li>
</ol>
<p>OBS: Os componentes do React são funções comuns do JavaScript, mas seus nomes devem começar com letra maiúscula ou não funcionarão</p>
<pre>
  //Arquivo index.html
    &#60;body>
      &#60;div class="saudacao">&#60;/div>
    ...
__________________________________
  //Arquivo index.js
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import Saudacao from './Saudacao';
  import reportWebVitals from './reportWebVitals';

  const txt = ReactDOM.createRoot(document.querySelector('.saudacao'));
  txt.render(
    &#60;React.StrictMode>
      &#60;Saudacao />
    &#60;/React.StrictMode>
  );
  reportWebVitals();
</pre>
<p>No exemplo acima nosso componente 'Saudacao' é renderizado no arquivo <code>index.html</code> na <code>div class="saudacao"</code> através do arquivo <code>index.js</code></p>
<p>OBS: Componentes podem renderizar outros componentes, mas você nunca deve definir um componente dentro de outro componente
  <pre>export default function Gallery() {
    // 🔴 Nunca defina um componente dentro de outro componente!
    function Profile() {
      // ...
    }
    // ...
  }</pre>
  O trecho acima é muito lento e causa erros. Em vez disso, defina todos os componentes no nível superior:
  <pre>export default function Gallery() {
    // ...
  }

  // ✅ Declare componentes no nível superior
  function Profile() {
    // ...
  }</pre>
  Quando um componente filho precisa de alguns dados de um pai, passe-os por 'props', queserá visto na aula 03, em vez de definições de aninhamento.
</p>
<p>Além dos componentes de função, no React também usandos os <code>componentes de classe</code>, que são componentes que possuem um alto nível de poder dentro da aplicação, pois além de gerenciar o próprio estado, herdam os chamados métodos de clico de vida do React, lidam com partes lógicas da aplicação e manipulam eventos através de métodos que podem ser invocados em qualquer lugar do componente ou em seus filhos. Eles são mais comlexos e oferecem mais funcionalidade em comparação com componentes de função.
Para definir um <code>class component</code>, a classe precisa estender React.Component
<pre>
class Welcome extends React.Component {
  render() {
    return &#60;h1>Olá, {this.props.name}&#60;/h1>;
  }
}
</pre>
O método <code>render()</code> é obrigatório em um componente de classe, sendo responsável por descrever o que será exibido na tela, ele retorna o código JSX, ele não recebe nenum argumento e é chamado automaticamente pelo React.Embora o método <code>render()</code> seja chamado, isso não significa necessariamente que o DOM será atualizado. O React usa um processo chamado reconciliação para determinar quais partes do DOM precisam ser alteradas.
</p>