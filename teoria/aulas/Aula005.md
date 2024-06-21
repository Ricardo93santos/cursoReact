<h1>Renderização condicional</h1>
<p>No React podemos exibir componentes e elementos a depender de uma determinada condição, usando apenas instruções condicionais como <code>if</code>, operadores condicionais como (and) <code>&&</code> e operador ternário <code>? :</code> do JavaScript.</p>
<p>Aqui estão algumas maneiras de usar a renderização condicional:
<ol>
  <li><strong>Usando <code>if/else</code>:</strong><br>
    Você pode usar uma declaração <code>if</code> para decidir qual componente renderizar.
    <pre>
      function Welcome(props) {
        if (props.isLoggedIn) {
          return &#60;UserGreeting />;
        } else {
          return &#60;GuestGreeting />;
        }
      }</pre>
  </li><br>
  <li><strong>Operador Lógico <code>&&</code>:</strong><br>
    Quando você quer renderizar um componente apenas se uma condição for verdadeira, sem um bloco <code>else</code>.
    <pre>
      function Mailbox(props) {
        return (
          &#60div>
            &#60h1>Hello!&#60/h1>
              {props.unreadMessages.length > 0 &&
              &#60h2>
                You have {props.unreadMessages.length} unread messages.
              &#60/h2>
            }
          &#60/div>);
      }</pre>
    O operador lógico && é usado para verificar se <code>props.unreadMessages.length</code> é maior que 0. Se essa condição for verdadeira, o elemento &#60;h2> com a mensagem sobre mensagens não lidas será renderizado. Se for falso (ou seja, se não houver mensagens não lidas), nada após o operador && será renderizado e o elemento &#60;h2> será omitido do output.
  </li><br>
  <li><strong>Operador Ternário <code>?</code>:</strong><br>
    Útil para fazer uma escolha entre dois componentes durante a renderização.
    <pre>
      function LogoutButton(props) {
        return (
          &#60;button onClick={props.onLogoutClick}>
            Logout
          &#60;/button>
        );
      }
      function LoginButton(props) {
        return (
          &#60;button onClick={props.onLoginClick}>
            Login
          &#60;/button>
        );
      }
      function Greeting(props) {
        return (
          &#60;div>
            {props.isLoggedIn ? &#60;LogoutButton /> : &#60;LoginButton />}
          &#60;/div>
        );
      }</pre>
    Nesse exemplo se <code>props.isLoggedIn</code> for verdadeiro, o &#60;LogoutButton /> será renderizado. Se for falso, o &#60;LoginButton /> será renderizado. É uma forma concisa de escrever uma instrução <code>if-else</code> em uma única linha.
  </li><br>
  <li><strong>Prevenindo o Componente de Renderizar:</strong><br> Às vezes, você pode querer que um componente não renderize nada. Para isso, você pode fazer com que o componente renderize null.
    <pre>
      function WarningBanner(props) {
        if (!props.warn) {
          return null;
        }
        return (
          &#60;div className="warning">
            Warning!
          &#60;/div>
        );
      }</pre>
  </li>