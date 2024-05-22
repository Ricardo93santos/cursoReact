<h1>Escrevendo Tags com JSX</h1>
<p>Como sabemos o JSX é uma sintaxe de extensão JavaScript usada no React para escrever facilmente HTML e JavaScript juntos. Mas o navegador não entende esse JSX porque não é um código JavaScript válido. Isso ocorre porque estamos atribuindo uma tag HTML a uma variável que não é uma string.</p>
<h3>Mas porque o JSX é usado?</h3>
<p>Como sabemos, cada componente React é uma função JavaScript que pode conter alguma marcação que o React renderiza no navegador. O JSX é usado pois ele fornece aos desenvolvedores uma forma mais simples e intuitiva de criar os componentes de uma aplicação. Onde podemos combinar o HTML no JavaScript, facilitando a criação de interfaces. Além de manter a lógica de renderização e a marcação de um botão juntas garante que eles permaneçam sincronizados em cada edição. Por outro lado, detalhes não relacionados, como a marcação do botão e a marcação da barra lateral, são isolados uns dos outros, tornando mais seguro alterar qualquer um deles por conta própria.</p>

<h2>Convertendo HTML em JSX</h2>
<p>Suponha que você tenha um código HTML válido e deseje colocar em um componente, como no exemplo:
<pre>
export default function TodoList() {
  return (
    // This doesn't quite work!
    &#60;h1>Hedy Lamarr's Todos&#60;/h1>
    &#60;img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    >
    &#60;ul>
      &#60;li>Invent new traffic lights
      &#60;li>Rehearse a movie scene
      &#60;li>Improve the spectrum technology
    &#60;/ul>
  );
}
</pre>
O resultado será:
<pre>
Error
/src/App.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (5:4)
  3 |     // This doesn't quite work!
  4 |     &#60;h1>Hedy Lamarr's Todos&#60;/h1>
> 5 |     &#60;img 
    |     ^
  6 |       src="https://i.imgur.com/yXOvdOSs.jpg" 
  7 |       alt="Hedy Lamarr" 
  8 |       class="photo"
</pre>
Isso ocorre porque o JSX é mais rígido e tem algumas regras a mais que o HTML! Se você ler as mensagens de erro acima, elas o orientarão para corrigir a marcação.
</p>
<h2>Regras do JSX</h2>
<ul>
  <li>
    <h3>Retornar um único elemento raiz</h3>
    <p>O JSX retorna um único elemento, para retornar vários elementos de um componente, envolva-os em uma única tag pai. Por exemplo, deve usar uma <code>&#60;div></code>:</p>
    <pre>
      &#60;div>
        &#60;h1>Hedy Lamarr's Todos&#60;/h1>
        &#60;img 
          src="https://i.imgur.com/yXOvdOSs.jpg" 
          alt="Hedy Lamarr" 
          class="photo"
        >
        &#60;ul>
          ...
        &#60;/ul>
      &#60;/div></pre>
    <p>Se você não quiser adicionar um &#60;div> extra à sua marcação, você pode escrever <> e &#60;/>. Essa tag vazia é chamada de Fragmento. Os fragmentos permitem agrupar coisas sem deixar rastros na árvore HTML do navegador.</p>
  </li>
  <li>
    <h3>Feche todas as Tags</h3>
    <p>JSX exige que as tags sejam explicitamente fechadas: tags de fechamento automático como &#60;img> devem se tornar &#60;img />, e tags de encapsulamento como &#60;li>laranjas devem ser escritas como &#60;li>laranjas&#60;/li>. Como no exemplo a seguir:</p>
    <pre>
    <>
      &#60;img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        class="photo"
      />
      &#60;ul>
        &#60;li>Invent new traffic lights&#60;/li>
        &#60;li>Rehearse a movie scene&#60;/li>
        &#60;li>Improve the spectrum technology&#60;/li>
      &#60;/ul>
    &#60;/></pre>
  </li>
  <li>
    <h3>Sempre use camelCase</h3>
    <p>JSX se transforma em JavaScript e atributos escritos em JSX tornam-se chaves de objetos JavaScript. Sabemos que no JavaScript tem limitações nos nomes de variáveis. Por exemplo, seus nomes não podem conter travessões ou ser palavras reservadas como classe.</p>
    <p>É por isso que, no React, muitos atributos HTML e SVG são escritos em camelCase. Por exemplo, em vez de Stroke-Width você usa StrokeWidth. Como class é uma palavra reservada, no React você escreve className, nomeado após a propriedade DOM correspondente:</p>
    <pre>
      &#60;img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
      /></pre>
  </li>
</ul>