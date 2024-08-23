<h1>Eventos no React</h1>
<p>Manipuladores de eventos em React são uma parte fundamental para criar interações dinâmicas em suas aplicações. Em React, os eventos são manipulados de forma semelhante ao DOM, mas com algumas diferenças importantes:</p>
<ol>
  <li><strong>Nomeação em camelCase:</strong> Em vez de usar letras minúsculas como no HTML, os eventos em React são nomeados usando camelCase. Por exemplo, <code>onclick</code> no HTML se torna <code>onClick</code> em React.</li>
  <li><strong>Funções como manipuladores:</strong> Em vez de passar uma string, você passa uma função como manipulador de eventos. Por exemplo:
  <pre>
    &#60;button onClick={activateLasers}>Ativar lasers&#60;/button>
  </pre>
  </li>
  <li><strong>preventDefault():</strong> Para evitar o comportamento padrão de um evento, você deve chamar <code>preventDefault()</code> explicitamente. Por exemplo:
  <pre>
    function handleSubmit(e) {
      e.preventDefault();
      console.log('Você clicou em enviar.');
    }
    return (
      &#60;form onSubmit={handleSubmit}>
        &#60;button type="submit">Enviar&#60;/button>
      &#60;/form>
    );
  </pre>
  </li>
</ol>
<p>Veja mais sobre manipulador de eventos em <a href="https://pt-br.react.dev/learn/responding-to-events">https://pt-br.react.dev/learn/responding-to-events</a>.</p>